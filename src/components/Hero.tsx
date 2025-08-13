"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative  text-white py-28 px-6 overflow-hidden">
      {/* إضاءة خلفية ناعمة */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]">
            NeonBot
          </span>{" "}
          <span className="text-gray-400">– The AI That Gets You</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          Ditch the generic bots.{" "}
          <span className="font-semibold text-white">NeonBot</span> is your
          intelligent, 24/7 assistant built to sound human, respond fast, and
          connect naturally.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,0,255,0.7)" }}
        >
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-cyan-400 text-white flex items-center justify-center gap-2 text-base font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
            <Rocket size={18} /> Try it Free
          </button>
          <span className="text-sm text-gray-400">No sign-up needed</span>
        </motion.div>
      </div>
    </section>
  );
}
