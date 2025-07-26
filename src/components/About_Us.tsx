import { Zap, Brain, Target } from "lucide-react";

export default function About_Us() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Meet <span className="text-blue-600">NeonBot</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            We’re not building another chatbot. We’re designing an AI partner that helps you think, create, and execute smarter — in real time.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            NeonBot blends the intelligence of AI with the clarity of great UX, giving you a tool that’s fast, intuitive, and never in your way.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Whether you're brainstorming ideas, automating tasks, or solving complex problems, NeonBot adapts to your flow — so you can stay in the zone.
          </p>
          <p className="text-xl font-semibold text-gray-800 mt-8">
            This isn’t the future of work. <br />
            <span className="text-blue-600">It’s the upgrade your workflow needs.</span>
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Why Choose NeonBot?
          </h3>
          <div className="space-y-6">
            <Feature
              icon={<Zap className="w-6 h-6 text-blue-600" />}
              title="Lightning Fast"
              desc="No delays. No loading screens. Just instant responses that keep your momentum going."
            />
            <Feature
              icon={<Brain className="w-6 h-6 text-blue-600" />}
              title="Truly Smart"
              desc="Understands context and nuance — not just commands."
            />
            <Feature
              icon={<Target className="w-6 h-6 text-blue-600" />}
              title="Built for Focus"
              desc="Designed to minimize distraction and maximize output."
            />
          </div>
        </div>
      </div>
    </section>
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
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 p-3 rounded-xl">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
