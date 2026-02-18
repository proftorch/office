from langchain_community.llms import Ollama
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import CharacterTextSplitter
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_community.embeddings import HuggingFaceEmbeddings


with open("data/policies.txt", "r", encoding="utf-8") as f:
    text = f.read()


splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
docs = splitter.split_text(text)



embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

vectorstore = FAISS.from_texts(docs, embeddings)
retriever = vectorstore.as_retriever()


llm = Ollama(model="phi3")


prompt = ChatPromptTemplate.from_template(
    """Answer the question based only on the context below:
    {context}

    Question: {question}
    """
)


chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

def ask_bot(question: str):
    return chain.invoke(question)
