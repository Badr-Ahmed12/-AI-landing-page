import { motion , easeOut } from "framer-motion";
import { Bot , Zap , ShieldCheck , Palette , Brain , PlugZap , Diamond } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-pink-400 drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]" />,
    title: "Advanced AI, Human Touch",
    description:
      "NeonBot uses state-of-the-art language models with a natural tone — no robotic replies, just smooth, smart interaction.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,255,0,0.8)]" />,
    title: "Lightning Fast Responses",
    description:
      "Built for speed and performance. Instant replies across all platforms — web, mobile, desktop.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-400 drop-shadow-[0_0_6px_rgba(0,255,0,0.8)]" />,
    title: "Secure & Private",
    description:
      "Your data is encrypted and never shared. We value privacy and secure everything end-to-end.",
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-500 drop-shadow-[0_0_6px_rgba(255,105,180,0.8)]" />,
    title: "Customizable Experience",
    description:
      "Tweak colors, tone, and behavior to fit your brand identity. Multilingual support included.",
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-400 drop-shadow-[0_0_6px_rgba(138,43,226,0.8)]" />,
    title: "Always Learning",
    description:
      "The more it's used, the better it gets. NeonBot constantly evolves to understand your users.",
  },
  {
    icon: <PlugZap className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]" />,
    title: "Easy Integration",
    description:
      "Embed in minutes. Compatible with websites, CRMs, and your favorite tools — no tech headache.",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 b text-white overflow-hidden">
      {/* Glow الخلفي */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3">
          <Diamond className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]" />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose NeonBot?
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Experience the perfect blend of innovation, privacy, and design — here’s what makes us stand out.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,0,255,0.3)",
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-left cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
