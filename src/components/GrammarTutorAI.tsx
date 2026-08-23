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
    <div id="grammar-tutor-view" className="flex-1 flex flex-col h-[calc(100vh-6.5rem)] bg-[#F5F5F7] p-4 sm:p-6 max-w-5xl mx-auto w-full">
      
      {/* Header */}
      <div className="apple-card p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-semibold text-[#1D1D1F] text-base flex items-center gap-2">
              Advanced Grammar AI Explainer
            </h2>
            <p className="text-xs text-[#6E6E73]">
              Grounded in Cambridge Advanced Grammar in Use • Martin Hewings
            </p>
          </div>
        </div>
        <span className="text-xs px-3 py-1 rounded-full font-medium bg-black/[0.04] text-[#1D1D1F]">
          {languageMode === 'bilingual' ? '🇲🇲 Bilingual' : 'English Mode'}
        </span>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto apple-card p-4 sm:p-6 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${
              m.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium ${
                m.sender === "user"
                  ? "bg-[#1D1D1F] text-white"
                  : "bg-[#0071E3]/10 text-[#0071E3]"
              }`}
            >
              {m.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                m.sender === "user"
                  ? "bg-[#0071E3] text-white"
                  : "bg-[#F5F5F7] text-[#1D1D1F] border border-black/[0.04]"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="p-3.5 bg-[#F5F5F7] rounded-2xl border border-black/[0.04] text-xs text-[#6E6E73] flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0071E3]" />
              <span>Analyzing grammar rules & structuring explanation...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Questions */}
      <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs font-medium text-[#86868B] flex items-center gap-1 pl-1 flex-shrink-0">
          <Lightbulb className="w-3.5 h-3.5 text-[#FF9500]" />
          <span>Quick Ask:</span>
        </span>
        {samplePrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(languageMode === "bilingual" ? p.my : p.en)}
            className="apple-btn apple-btn-secondary px-3 py-1 text-xs rounded-full flex-shrink-0 cursor-pointer"
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
              ? "သဒ္ဒါမေးခွန်း သို့မဟုတ် စစ်ဆေးလိုသော ဝါကျကို ရိုက်ထည့်ပါ..."
              : "Type any grammar question or sentence to analyze..."
          }
          className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-black/[0.1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0071E3] text-[#1D1D1F] shadow-2xs"
        />
        <button
          id="ai-tutor-send-btn"
          onClick={() => handleSendMessage()}
          disabled={!inputQuestion.trim() || isLoading}
          className="apple-btn apple-btn-blue px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium disabled:opacity-30 flex items-center gap-1.5 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ask</span>
        </button>
      </div>

    </div>
  );
};
