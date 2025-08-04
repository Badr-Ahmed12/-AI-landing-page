import { Star, Quote , Speech } from "lucide-react";

const testimonials = [
  {
    name: "Mohamed Samir",
    role: "CEO at FutureTech",
    quote: "NeonBot completely changed how we handle support. It's intuitive, fast, and seriously impressive.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    name: "Noura Ali",
    role: "Digital Marketing Strategist",
    quote: "I love how human it feels. NeonBot became part of my daily flow, and my clients noticed the difference.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
  },
  {
    name: "Ali Elgazar",
    role: "App Developer",
    quote: "It blends into my website perfectly. Lightweight, clean, and gets smarter every week.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-r  py-28 px-6 sm:px-10 lg:px-36" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-10">
          <Speech className="w-12 h-12 text-indigo-500 inline-block mb-2 animate-pulse" /> What Our Users Are Saying
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-20">
          Inspiring stories and genuine feedback from our community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-gray-200 object-cover"
                />
                <div className="text-left">
                  <h4 className="text-md font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
