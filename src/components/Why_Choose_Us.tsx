import {
    Bot,
    Zap,
    ShieldCheck,
    Palette,
    Brain,
    PlugZap,
    Diamond as Diamond,
  } from "lucide-react";
  
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
      title: "Advanced AI, Human Touch",
      description:
        "NeonBot uses state-of-the-art language models with a natural tone — no robotic replies, just smooth, smart interaction.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast Responses",
      description:
        "Built for speed and performance. Instant replies across all platforms — web, mobile, desktop.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      title: "Secure & Private",
      description:
        "Your data is encrypted and never shared. We value privacy and secure everything end-to-end.",
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      title: "Customizable Experience",
      description:
        "Tweak colors, tone, and behavior to fit your brand identity. Multilingual support included.",
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "Always Learning",
      description:
        "The more it's used, the better it gets. NeonBot constantly evolves to understand your users.",
    },
    {
      icon: <PlugZap className="h-8 w-8 text-blue-500" />,
      title: "Easy Integration",
      description:
        "Embed in minutes. Compatible with websites, CRMs, and your favorite tools — no tech headache.",
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-2">
            <Diamond className="w-10 h-10 text-indigo-600" /> 
            Why Choose <span className="text-indigo-600 font-extrabold">NeonBot</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Experience the perfect blend of innovation, privacy, and design —
            here’s what makes us stand out.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-left"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  