// components/Integrations.tsx
import {
    Slack,
    Zap,
    Chrome,
    Server,
    Globe,
    Database,
    Link2,
    Rocket,
  } from "lucide-react"
  
  interface IntegrationItem {
    name: string
    description: string
    iconName: string
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
      iconName: "Database",
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
  ]
  
  const IconMapper: Record<string, JSX.Element> = {
    Slack: <Slack size={32} className="text-[#4A154B]" />,
    Zap: <Zap size={32} className="text-orange-500" />,
    Chrome: <Chrome size={32} className="text-blue-500" />,
    Server: <Server size={32} className="text-[#21759B]" />,
    Globe: <Globe size={32} className="text-[#DB4437]" />,
    Database: <Database size={32} className="text-black" />,
    Link2: <Link2 size={32} className="text-gray-600" />,
  }
  
  export default function Integrations() {
    return (
      <section className="w-full bg-[#F9FAFB] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-8">
           <Rocket className="w-10 h-10 text-indigo-600 inline-block" /> Powerful Integrations 
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-base md:text-lg">
            Unlock the full potential of NeonBot by connecting it to the tools you already use. Automate, streamline, and scale your productivity.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 transition duration-200 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-100 p-2 rounded-xl">
                    {IconMapper[item.iconName]}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
