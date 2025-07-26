"use client";
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
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      desc: "Let NeonBot handle your DMs like a pro – instant replies, 24/7 support, zero stress.",
    },
    {
      title: "AI-Powered Insights",
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      desc: "No more boring spreadsheets. Get easy-to-read analytics that actually help you grow.",
    },
    {
      title: "Seamless Integrations",
      icon: <Link2 className="w-8 h-8 text-green-600" />,
      desc: "Connect NeonBot to Instagram, WhatsApp, Telegram & more – and watch your workflow flow.",
    },
    {
      title: "Human-like Conversations",
      icon: <MessageCircle className="w-8 h-8 text-pink-600" />,
      desc: "Built to talk like a real person – but smarter. Keep your users engaged without lifting a finger.",
    },
    {
      title: "Fully Customizable",
      icon: <Palette className="w-8 h-8 text-yellow-500" />,
      desc: "From tone to timing, customize every detail to match your brand's personality and vibe.",
    },
    {
      title: "Lightning-Fast Support",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      desc: "Clients ask. Bot answers. Problem solved. Your reputation? Gold.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What NeonBot Can Do For You
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-12">
          Unlock the full power of automation, smart communication, and
          AI-driven performance – all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-50 text-left group"
            >
              <div className="mb-4 group-hover:scale-105 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
