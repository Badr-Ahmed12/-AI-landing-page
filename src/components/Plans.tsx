import {
    MessageCircle,
    Rocket,
    Users,
    ShieldCheck,
    FileText,
    Wrench,
    Zap,
  } from "lucide-react";
  
  export default function Plans() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Pricing Plans</h1>
          <p className="text-lg text-gray-600 mb-12">
            Pick the plan that fits your <span className="text-black font-semibold">Neon<span className="text-blue-500">Bot</span></span> journey
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="text-gray-600 w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Free Plan</h2>
                <p className="text-sm text-gray-500 mb-6">Zero cost, zero stress</p>
                <ul className="text-left text-sm space-y-3 text-gray-700">
                  <li>✅ Chat with NeonBot anytime</li>
                  <li>✅ Basic AI replies</li>
                  <li>✅ Web & mobile access</li>
                  <li>✅ Great for casual users</li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold">Free</p>
              </div>
            </div>
  
            {/* Pro Plan */}
            <div className="rounded-2xl border-2 border-blue-500 p-6 shadow-md bg-blue-50 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Rocket className="text-blue-700 w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-blue-800 mb-2">Pro Plan</h2>
                <p className="text-sm text-blue-700 mb-6">Smarter, faster, always on point</p>
                <ul className="text-left text-sm space-y-3 text-blue-900">
                  <li>🚀 Smarter AI responses</li>
                  <li><FileText className="inline w-4 h-4 mr-1" /> Unlimited chat history</li>
                  <li><Zap className="inline w-4 h-4 mr-1" /> Early feature access</li>
                  <li><MessageCircle className="inline w-4 h-4 mr-1" /> Priority support</li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold text-blue-800">$9.99<span className="text-sm font-normal">/month</span></p>
              </div>
            </div>
  
            {/* Business Plan */}
            <div className="rounded-2xl border-2 border-red-500 p-6 shadow-md bg-red-50 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-red-700 w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-red-800 mb-2">Business Plan</h2>
                <p className="text-sm text-red-700 mb-6">For teams and enterprises</p>
                <ul className="text-left text-sm space-y-3 text-red-900">
                  <li><Users className="inline w-4 h-4 mr-1" /> Multi-user support</li>
                  <li><ShieldCheck className="inline w-4 h-4 mr-1" /> Enterprise security</li>
                  <li><Wrench className="inline w-4 h-4 mr-1" /> Custom integrations</li>
                  <li><FileText className="inline w-4 h-4 mr-1" /> Analytics & insights</li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold text-red-800">$29.99<span className="text-sm font-normal">/month</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  