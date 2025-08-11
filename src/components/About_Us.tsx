"use client";
import { motion } from "framer-motion";
import { Zap, Brain, Target } from "lucide-react";

export default function About_Us() {
  return (
    <motion.section
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* إضاءة خلفية */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Meet{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">
              NeonBot
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            We’re not building another chatbot. We’re designing an AI partner
            that helps you think, create, and execute smarter — in real time.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            NeonBot blends the intelligence of AI with the clarity of great UX,
            giving you a tool that’s fast, intuitive, and never in your way.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Whether you're brainstorming ideas, automating tasks, or solving
            complex problems, NeonBot adapts to your flow — so you can stay in
            the zone.
          </p>
          <p className="text-xl font-semibold text-gray-200 mt-8">
            This isn’t the future of work. <br />
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              It’s the upgrade your workflow needs.
            </span>
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Why Choose NeonBot?
          </h3>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <Feature
              icon={<Zap className="w-6 h-6 text-pink-400" />}
              title="Lightning Fast"
              desc="No delays. No loading screens. Just instant responses that keep your momentum going."
            />
            <Feature
              icon={<Brain className="w-6 h-6 text-purple-400" />}
              title="Truly Smart"
              desc="Understands context and nuance — not just commands."
            />
            <Feature
              icon={<Target className="w-6 h-6 text-cyan-400" />}
              title="Built for Focus"
              desc="Designed to minimize distraction and maximize output."
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Sub-component for each feature item
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      className="flex items-start gap-4 group"
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <div className="bg-white/10 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
}
