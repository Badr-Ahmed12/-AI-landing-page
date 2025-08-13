import React from "react";
import { motion } from "framer-motion";

export default function Feature({
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