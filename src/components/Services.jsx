import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = {
    software: {
      title: "Software Development",
      desc: "Web apps, APIs, scalable backend systems."
    },
    web: {
      title: "Web & Mobile Applications",
      desc: "Modern UI/UX, responsive websites, mobile apps."
    },
    ai: {
      title: "AI & Data Science",
      desc: "ML models, analytics, automation, AI solutions."
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() =>
                setActiveService(activeService === key ? null : key)
              }
              className="px-5 py-2 border rounded-md hover:bg-black hover:text-white transition"
            >
              {services[key].title}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeService && (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">
              {services[activeService].title}
            </h3>
            <p className="mt-2 text-gray-600">
              {services[activeService].desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
