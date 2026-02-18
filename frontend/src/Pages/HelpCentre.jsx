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
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center p-8">

      <div className="w-full max-w-3xl bg-[#111827] rounded-2xl border border-[#1f2937] flex flex-col h-[85vh]">

        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1f2937] text-gray-300 text-base font-medium tracking-wide">
          Help Centre Assistant
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-5 py-3 rounded-2xl max-w-lg text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#1f2937] text-gray-200"
                    : "bg-[#182033] text-gray-300"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#182033] text-gray-400 px-5 py-3 rounded-2xl text-sm">
                Typing...
              </div>
            </div>
          )}

        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-[#1f2937]">
          <div className="flex items-center gap-3 bg-[#0f172a] rounded-xl px-4 py-3 border border-[#1f2937]">

            <input
              type="text"
              className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-sm"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="text-gray-300 hover:text-white transition text-sm"
            >
              Send
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
