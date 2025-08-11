"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Bot,
  Lock,
  Settings,
  MessageCircle,
  MessageCircleQuestionMarkIcon,
} from "lucide-react";

const faqs = [
  {
    icon: <Bot size={20} className="text-cyan-400 drop-shadow-[0_0_6px_#0ff]" />,
    question: "What is NeonBot and how does it work?",
    answer:
      "NeonBot is an AI-powered chatbot that automates customer support, FAQs, and user engagement through smart interactions on your website or app.",
  },
  {
    icon: (
      <Settings size={20} className="text-purple-400 drop-shadow-[0_0_6px_#a855f7]" />
    ),
    question: "Can I integrate NeonBot with my tools?",
    answer:
      "Yes, NeonBot integrates with Slack, Discord, WhatsApp, Shopify, and more. Setup takes minutes and expands your workflow instantly.",
  },
  {
    icon: (
      <MessageCircle
        size={20}
        className="text-emerald-400 drop-shadow-[0_0_6px_#34d399]"
      />
    ),
    question: "Is NeonBot beginner-friendly?",
    answer:
      "Absolutely! No coding required. Our interface is built to help non-tech users create and deploy chatbots with ease.",
  },
  {
    icon: <Lock size={20} className="text-red-400 drop-shadow-[0_0_6px_#f87171]" />,
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
    <section className=" text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <MessageCircleQuestionMarkIcon
            className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_#0ff] inline-block animate-bounce"
          />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
            Frequently Asked Questions
          </span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className={`rounded-2xl border border-white/10 overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "bg-black/60 shadow-[0_0_16px_#0ff]"
                    : "bg-neutral-900/50 hover:bg-neutral-800/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 p-6 group"
                >
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        isOpen ? "text-cyan-400" : "text-gray-200"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-cyan-400"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-6 text-gray-300 text-sm leading-relaxed"
                      style={{ overflow: "hidden" }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
