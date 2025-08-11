"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Rocket,
  Users,
  ShieldCheck,
  FileText,
  Wrench,
  Zap,
} from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Free Plan",
      icon: (
        <MessageCircle className="text-pink-400 w-8 h-8 drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]" />
      ),
      desc: "Zero cost, zero stress",
      color: "from-pink-500 to-purple-500",
      price: "Free",
      features: [
        "✅ Chat with NeonBot anytime",
        "✅ Basic AI replies",
        "✅ Web & mobile access",
        "✅ Great for casual users",
      ],
    },
    {
      name: "Pro Plan",
      icon: (
        <Rocket className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
      ),
      desc: "Smarter, faster, always on point",
      color: "from-cyan-400 to-blue-500",
      price: "$9.99/month",
      features: [
        "🚀 Smarter AI responses",
        <>
          <FileText className="inline w-4 h-4 mr-1" />
          Unlimited chat history
        </>,
        <>
          <Zap className="inline w-4 h-4 mr-1" />
          Early feature access
        </>,
        <>
          <MessageCircle className="inline w-4 h-4 mr-1" />
          Priority support
        </>,
      ],
    },
    {
      name: "Business Plan",
      icon: (
        <Users className="text-red-400 w-8 h-8 drop-shadow-[0_0_6px_rgba(255,0,0,0.8)]" />
      ),
      desc: "For teams and enterprises",
      color: "from-red-400 to-orange-500",
      price: "$29.99/month",
      features: [
        <>
          <Users className="inline w-4 h-4 mr-1" />
          Multi-user support
        </>,
        <>
          <ShieldCheck className="inline w-4 h-4 mr-1" />
          Enterprise security
        </>,
        <>
          <Wrench className="inline w-4 h-4 mr-1" />
          Custom integrations
        </>,
        <>
          <FileText className="inline w-4 h-4 mr-1" />
          Analytics & insights
        </>,
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative  py-24 px-6 overflow-hidden">
      {/* Glow خلفي */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          Pick the plan that fits your{" "}
          <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Neon<span className="text-cyan-400">Bot</span>
          </span>{" "}
          journey
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,0,255,0.7)",
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h2>
                <p className="text-sm text-gray-300 mb-6">{plan.desc}</p>
                <ul className="text-left text-sm space-y-3 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p
                  className={`text-2xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                >
                  {plan.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
