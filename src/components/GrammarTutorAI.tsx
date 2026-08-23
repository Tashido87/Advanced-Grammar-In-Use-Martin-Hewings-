import React, { useState } from "react";
import { LanguageMode } from "../types";
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  HelpCircle, 
  Lightbulb, 
  RefreshCw,
  BookOpen
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
}

interface GrammarTutorAIProps {
  languageMode: LanguageMode;
  initialQuestion?: string;
  initialContext?: string;
}

export const GrammarTutorAI: React.FC<GrammarTutorAIProps> = ({
  languageMode,
  initialQuestion = "",
  initialContext = "",
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      sender: "ai",
      text: languageMode === "bilingual"
        ? `မင်္ဂလာပါ! ကျွန်တော်က **Advanced Grammar in Use (Martin Hewings)** အထောက်အကူပြု AI ဆရာဖြစ်ပါတယ်။\n\nB2 level မှ C1/C2 သို့ တက်လှမ်းရာတွင် ရှုပ်ထွေးနိုင်သည့် Grammar rules များ၊ ဝါကျမှန်မမှန် စစ်ဆေးခြင်း သို့မဟုတ် Exercise များနှင့်ပတ်သက်၍ မည်သည့်အရာမဆို မေးမြန်းနိုင်ပါသည်။`
        : `Hello! I am your **Advanced Grammar in Use** Cambridge AI Tutor.\n\nAsk me anything about advanced English nuances (B2 to C2), test your own sentences, or ask for deep comparisons between confusing grammar points!`,
      timestamp: Date.now(),
    }
  ]);

  const [inputQuestion, setInputQuestion] = useState(initialQuestion);
  const [isLoading, setIsLoading] = useState(false);

  const samplePrompts = [
    {
      en: "Why is 'She was able to cross the river' correct instead of 'could cross'?",
      my: "မြစ်ဖြတ်ကူးရာမှာ 'could cross' မသုံးဘဲ 'was able to cross' ဘာလို့သုံးရတာလဲ?"
    },
    {
      en: "What is the difference between 'I'm thinking' and 'I think'?",
      my: "'I think' နဲ့ 'I'm thinking' ကွာခြားချက်ကို ရှင်းပြပေးပါ။"
    },
    {
      en: "How does Inversion work with 'Rarely had I' and conditionals like 'Had I known'?",
      my: "'Had I known' နဲ့ 'Rarely had I' Inversion သုံးစွဲပုံကို ရှင်းပြပေးပါ။"
    },
    {
      en: "When do we use 'be to + infinitive' (e.g. The President is to visit)?",
      my: "'be to + infinitive' (The President is to visit) ကို ဘယ်အခါမှာ သုံးတာလဲ?"
    }
  ];

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputQuestion;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuestion("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ask-grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: textToSend,
          context: initialContext,
          language: languageMode === "bilingual" ? "my" : "en",
        }),
      });

      const data = await res.json();
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: data.reply || data.error || "I could not generate an answer right now.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      const errMsg: Message = {
        id: `err-${Date.now()}`,
        sender: "ai",
        text: "Could not connect to grammar service. Please ensure the dev server is active.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="grammar-tutor-view" className="flex-1 flex flex-col h-[calc(100vh-6.5rem)] bg-[#F8F9FA] p-4 sm:p-6 max-w-5xl mx-auto w-full">
      
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base flex items-center gap-2">
              Advanced Grammar AI Explainer & Tutor
            </h2>
            <p className="text-xs text-slate-500">
              Grounded in Cambridge Advanced Grammar in Use • Martin Hewings
            </p>
          </div>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          {languageMode === 'bilingual' ? 'မြန်မာ + English' : 'English Mode'}
        </span>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-3 ${
              m.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                m.sender === "user"
                  ? "bg-slate-900 text-white"
                  : "bg-blue-600 text-white shadow-2xs"
              }`}
            >
              {m.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            <div
              className={`max-w-[85%] rounded-xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                m.sender === "user"
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "bg-slate-50 text-slate-800 border border-slate-200"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 animate-pulse flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
              <span>Analyzing grammar rules & structuring explanation...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Questions */}
      <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 pl-1 flex-shrink-0">
          <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
          <span>Quick Ask:</span>
        </span>
        {samplePrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(languageMode === "bilingual" ? p.my : p.en)}
            className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded-full text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors flex-shrink-0 shadow-2xs cursor-pointer"
          >
            {languageMode === "bilingual" ? p.my : p.en}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="mt-3 flex items-center gap-2">
        <input
          id="ai-tutor-input"
          type="text"
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          placeholder={
            languageMode === "bilingual"
              ? "သဒ္ဒါမေးခွန်း သို့မဟုတ် စစ်ဆေးလိုသော ဝါကျကို မြန်မာ/အင်္ဂလိပ်လို ရိုက်ထည့်ပါ..."
              : "Type any grammar question or sentence to analyze..."
          }
          className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 shadow-2xs"
        />
        <button
          id="ai-tutor-send-btn"
          onClick={() => handleSendMessage()}
          disabled={!inputQuestion.trim() || isLoading}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold rounded-lg text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Ask</span>
        </button>
      </div>

    </div>
  );
};
