import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 text-black py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          NeonBot <span className="text-gray-500">– The AI That Gets You</span>
        </h1>

        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Ditch the generic bots. <span className="font-semibold text-black">NeonBot</span> is your intelligent, 24/7 assistant built to
          sound human, respond fast, and connect naturally.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 text-base font-medium py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105">
            <Rocket size={18} /> Try it Free
          </button>
          <span className="text-sm text-gray-500">No sign-up needed</span>
        </div>
      </div>
    </section>
  );
}
