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
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">

      <div className="w-full max-w-3xl bg-slate-800 rounded-2xl border border-slate-700 flex flex-col h-[85vh]">

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-700 text-slate-300 text-base font-medium tracking-wide">
          Help Centre Assistant
        </div>


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
                    ? "bg-slate-700 text-slate-200"
                    : "bg-slate-600 text-slate-100"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-600 text-slate-300 px-5 py-3 rounded-2xl text-sm">
                Typing...
              </div>
            </div>
          )}

        </div>


        <div className="px-6 py-4 border-t border-slate-700">
          <div className="flex items-center gap-3 bg-slate-900 rounded-xl px-4 py-3 border border-slate-700">

            <input
              type="text"
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 focus:outline-none text-sm"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="text-slate-300 hover:text-white transition text-sm"
            >
              Send
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
