"use client";
import { motion } from "framer-motion";
import { Star, Quote, Speech } from "lucide-react";

const testimonials = [
  {
    name: "Mohamed Samir",
    role: "CEO at FutureTech",
    quote:
      "NeonBot completely changed how we handle support. It's intuitive, fast, and seriously impressive.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    name: "Noura Ali",
    role: "Digital Marketing Strategist",
    quote:
      "I love how human it feels. NeonBot became part of my daily flow, and my clients noticed the difference.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
  },
  {
    name: "Ali Elgazar",
    role: "App Developer",
    quote:
      "It blends into my website perfectly. Lightweight, clean, and gets smarter every week.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-28 px-6 sm:px-10 lg:px-36  text-white overflow-hidden"
      id="testimonials"
    >
      {/* Glow الخلفي */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10">
          <Speech className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] inline-block mb-4" />{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            What Our Users Are Saying
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-20">
          Inspiring stories and genuine feedback from our community.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,0,255,0.7)",
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-purple-400 drop-shadow-[0_0_6px_rgba(138,43,226,0.8)] mb-4" />
                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-white/20 object-cover"
                />
                <div className="text-left">
                  <h4 className="text-md font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_4px_rgba(255,215,0,0.7)]"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
