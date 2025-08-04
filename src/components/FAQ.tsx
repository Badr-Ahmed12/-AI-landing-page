import { useState } from "react";
import { ChevronDown, Bot, Lock, Settings, MessageCircle , MessageCircleQuestionMarkIcon } from "lucide-react";

const faqs = [
  {
    icon: <Bot size={20} className="text-cyan-500" />,
    question: "What is NeonBot and how does it work?",
    answer:
      "NeonBot is an AI-powered chatbot that automates customer support, FAQs, and user engagement through smart interactions on your website or app.",
  },
  {
    icon: <Settings size={20} className="text-purple-500" />,
    question: "Can I integrate NeonBot with my tools?",
    answer:
      "Yes, NeonBot integrates with Slack, Discord, WhatsApp, Shopify, and more. Setup takes minutes and expands your workflow instantly.",
  },
  {
    icon: <MessageCircle size={20} className="text-emerald-500" />,
    question: "Is NeonBot beginner-friendly?",
    answer:
      "Absolutely! No coding required. Our interface is built to help non-tech users create and deploy chatbots with ease.",
  },
  {
    icon: <Lock size={20} className="text-red-500" />,
    question: "How secure is NeonBot?",
    answer:
      "Security is built-in. We use end-to-end encryption and comply with GDPR to ensure your data and user privacy are protected.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-neutral-900 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <MessageCircleQuestionMarkIcon className="w-10 h-10 text-cyan-500 inline-block animate-pulse" />
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border border-neutral-300 overflow-hidden transition-all duration-300 ${
                  isOpen ? "bg-neutral-100 shadow-[0_0_12px_#0ff3]" : "bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 p-6 group hover:bg-neutral-100 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span className="text-lg font-semibold text-left">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`text-neutral-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-500" : ""
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
