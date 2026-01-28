import { useState } from "react";
import Services from "./Services";
import heroBg from "../assets/images/leviax-logo.png";

export default function Hero() {
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TOP-RIGHT CONTENT */}
        <div className="relative z-10 flex justify-end">
          <div className="max-w-xl text-right text-white p-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI-Powered Software <br /> & Digital Solutions
            </h1>

            <p className="mt-4 text-gray-200">
              LeviaX helps businesses build modern software, AI solutions,
              cloud systems, and automation platforms that scale.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowServices(!showServices)}
                className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
              >
                Our Services
              </button>

              <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                Get a Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (TOGGLE) */}
      {showServices && <Services />}
    </>
  );
}
