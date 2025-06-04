import React from "react";
import ourstory from "../images/ourstory.jpg";
import ourstory2 from "../images/ourstory2.jpg";
import {
  FaLock,
  FaHome,
  FaBolt,
  FaSolarPanel,
  FaFireExtinguisher,
  FaShieldAlt,
} from "react-icons/fa";
import homestructure from "../images/homestructuref.JPG";

const cardData = [
  {
    icon: <FaLock className="text-4xl text-yellow-500" />,
    title: "Advanced Security",
    desc: "Multi-layered protection that keeps your space secure from all angles.",
  },
  {
    icon: <FaHome className="text-4xl text-yellow-500" />,
    title: "Home Automation",
    desc: "Smart control for doors, lights, and appliances from your phone.",
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-500" />,
    title: "Electric Fence",
    desc: "Powerful perimeter protection that stops intruders in their tracks.",
  },
  {
    icon: <FaSolarPanel className="text-4xl text-yellow-500" />,
    title: "Solar Power",
    desc: "Efficient energy solutions that cut bills and save the planet.",
  },
  {
    icon: <FaFireExtinguisher className="text-4xl text-yellow-500" />,
    title: "Fire Detection",
    desc: "Instant alerts for smoke and fire hazards, 24/7.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
    title: "Trusted Protection",
    desc: "Built on trust, technology, and years of security expertise.",
  },
];

const OurStory = () => {
  return (
    <>
      <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={ourstory}
          alt="Smart Home Security"
          className="w-full h-[90vh] object-cover"
        />
      </div>

      {/* Mobile Version */}
      <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={ourstory}
          alt="Smart Home Security Mobile"
          className="w-full h-[50vh] object-cover"
        />
      </div>

      <div className="bg-black relative top-20 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Headings & Paragraphs */}
          <div className="space-y-12 text-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">
                Our Journey Begins
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                From a small idea to a bold mission, MultiChoice was built on
                the foundation of innovation, security, and trust. Our goal? To
                protect homes and empower lives.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">
                Driven by Innovation
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We stay ahead with smart alarm systems, CCTV surveillance, and
                automated home solutions that redefine modern safety.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">
                Powered by Purpose
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Every solution we offer is designed to make your life safer,
                simpler, and smarter—from solar energy to fire protection.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">
                A Vision for the Future
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                As technology evolves, so do we. We're committed to offering
                advanced, accessible security that adapts to your world.
              </p>
            </div>
          </div>

          {/* Icon Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-xl shadow-lg p-6 hover:shadow-yellow-500/40 transition duration-300"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src={ourstory2} className="w-full" alt="" />
      </div>
      <div>
        <img src={homestructure} className="w-full" alt="" />
      </div>
    </>
  );
};

export default OurStory;
