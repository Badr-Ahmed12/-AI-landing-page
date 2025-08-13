import { motion , easeOut } from "framer-motion";
import {
  Slack,
  Zap,
  Chrome,
  Server,
  Globe,
  Database,
  Link2,
  Rocket,
  BookText, // أيقونة بديلة لـ Notion (ممكن تغيرها)
} from "lucide-react";

interface IntegrationItem {
  name: string;
  description: string;
  iconName: string;
}

const integrations: IntegrationItem[] = [
  {
    name: "Slack",
    iconName: "Slack",
    description:
      "NeonBot integrates directly with Slack to send real-time alerts, respond to messages, and automate daily communication within your workspace. Never miss an update again.",
  },
  {
    name: "Zapier",
    iconName: "Zap",
    description:
      "Connect NeonBot to over 5000+ apps using Zapier. From CRM systems to marketing platforms, automate everything without writing a single line of code.",
  },
  {
    name: "Chrome",
    iconName: "Chrome",
    description:
      "Use the NeonBot Chrome extension to instantly access chat tools, automation triggers, and quick summaries while browsing — all at your fingertips.",
  },
  {
    name: "Notion",
    iconName: "Notion",
    description:
      "Push insights, conversation summaries, and AI-generated content straight into your Notion workspace to keep everything organized and actionable.",
  },
  {
    name: "WordPress",
    iconName: "Server",
    description:
      "Embed NeonBot into your WordPress site to provide 24/7 AI-powered support, auto-respond to comments, and boost user engagement.",
  },
  {
    name: "Google",
    iconName: "Globe",
    description:
      "Integrate with Google products like Calendar, Sheets, and Drive. Schedule tasks, fetch documents, and sync events seamlessly using AI.",
  },
  {
    name: "Custom API",
    iconName: "Link2",
    description:
      "Use our RESTful API to build custom integrations with your own internal systems or unique tools — full flexibility, zero limits.",
  },
];

const IconMapper: Record<string, React.ReactNode>= {
  Slack: <Slack size={32} className="text-[#4A154B] drop-shadow-[0_0_8px_#4A154B]" />,
  Zap: <Zap size={32} className="text-orange-400 drop-shadow-[0_0_8px_#fb923c]" />,
  Chrome: <Chrome size={32} className="text-blue-400 drop-shadow-[0_0_8px_#60a5fa]" />,
  Server: <Server size={32} className="text-[#21759B] drop-shadow-[0_0_8px_#21759B]" />,
  Globe: <Globe size={32} className="text-red-400 drop-shadow-[0_0_8px_#f87171]" />,
  Database: <Database size={32} className="text-emerald-400 drop-shadow-[0_0_8px_#34d399]" />,
  Link2: <Link2 size={32} className="text-gray-300 drop-shadow-[0_0_8px_#d1d5db]" />,
  Notion: <BookText size={32} className="text-gray-200 drop-shadow-[0_0_8px_#d1d5db]" />, // أيقونة بديلة
  Default: <Database size={32} className="text-gray-400" />, // أيقونة افتراضية
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function Integrations() {
  return (
    <section className="w-full py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          <Rocket className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_#0ff] inline-block animate-bounce" />{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_#0ff]">
            Powerful Integrations
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Unlock the full potential of NeonBot by connecting it to the tools you already use. Automate, streamline, and scale your productivity.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #0ff" }}
              className="bg-neutral-900/50 rounded-2xl border border-white/10 shadow-lg p-6 cursor-pointer transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black/40 p-2 rounded-xl">
                  {IconMapper[item.iconName] || IconMapper["Default"]}
                </div>
                <h3 className="text-lg font-semibold text-cyan-300">{item.name}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
