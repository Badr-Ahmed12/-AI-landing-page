"use client";
import { motion , easeOut } from "framer-motion";
import {
  Bot,
  BarChart2,
  Link2,
  MessageCircle,
  Palette,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Smart Auto-Replies",
      icon: <Bot className="w-8 h-8 text-pink-400" />,
      desc: "Let NeonBot handle your DMs like a pro – instant replies, 24/7 support, zero stress.",
    },
    {
      title: "AI-Powered Insights",
      icon: <BarChart2 className="w-8 h-8 text-purple-400" />,
      desc: "No more boring spreadsheets. Get easy-to-read analytics that actually help you grow.",
    },
    {
      title: "Seamless Integrations",
      icon: <Link2 className="w-8 h-8 text-cyan-400" />,
      desc: "Connect NeonBot to Instagram, WhatsApp, Telegram & more – and watch your workflow flow.",
    },
    {
      title: "Human-like Conversations",
      icon: <MessageCircle className="w-8 h-8 text-yellow-400" />,
      desc: "Built to talk like a real person – but smarter. Keep your users engaged without lifting a finger.",
    },
    {
      title: "Fully Customizable",
      icon: <Palette className="w-8 h-8 text-green-400" />,
      desc: "From tone to timing, customize every detail to match your brand's personality and vibe.",
    },
    {
      title: "Lightning-Fast Support",
      icon: <Zap className="w-8 h-8 text-red-400" />,
      desc: "Clients ask. Bot answers. Problem solved. Your reputation? Gold.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Glow خلفي */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">
          What NeonBot Can Do For You
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-12">
          Unlock the full power of automation, smart communication, and
          AI-driven performance – all in one place.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,0,255,0.7)",
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 text-left cursor-pointer group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
