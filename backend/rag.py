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
    """
You are a professional corporate helpdesk assistant.

Use ONLY the provided context to answer the question.

Rules:
- Answer in 1-2 short sentences.
- Be clear and direct.
- Do NOT mention document IDs, page numbers, or internal references.
- Do NOT say "according to the document" or similar phrases.
- If the answer is not in the context, say: "I couldn't find that information."

Context:
{context}

Question:
{question}

Answer:
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
