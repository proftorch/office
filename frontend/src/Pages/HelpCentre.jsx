import { useState } from "react";

export default function HelpCentre() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello, How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { role: "bot", content: data.reply }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: "bot", content: "Server error. Please try again." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl flex flex-col h-[80vh]">

    
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="bg-gray-200 p-3 rounded-lg w-fit">
              Typing...
            </div>
          )}
        </div>


        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded-lg"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
