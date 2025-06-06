import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import ourstory from "../images/ourstory.jpg";
import ourstory2 from "../images/ourstory2.jpg";
import homestructure from "../images/homestructuref.JPG";
import {
  FaLock,
  FaHome,
  FaBolt,
  FaSolarPanel,
  FaFireExtinguisher,
  FaShieldAlt,
} from "react-icons/fa";

const cardData = [
  {
    icon: <FaLock className="text-4xl text-yellow-500" aria-hidden="true" />,
    title: "Advanced Security",
    desc: "Multi-layered protection that keeps your space secure from all angles.",
  },
  {
    icon: <FaHome className="text-4xl text-yellow-500" aria-hidden="true" />,
    title: "Home Automation",
    desc: "Smart control for doors, lights, and appliances from your phone.",
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-500" aria-hidden="true" />,
    title: "Electric Fence",
    desc: "Powerful perimeter protection that stops intruders in their tracks.",
  },
  {
    icon: <FaSolarPanel className="text-4xl text-yellow-500" aria-hidden="true" />,
    title: "Solar Power",
    desc: "Efficient energy solutions that cut bills and save the planet.",
  },
  {
    icon: <FaFireExtinguisher className="text-4xl text-yellow-500" aria-hidden="true" />,
    title: "Fire Detection",
    desc: "Instant alerts for smoke and fire hazards, 24/7.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-yellow-500" aria-hidden="true" />,
    title: "Trusted Protection",
    desc: "Built on trust, technology, and years of security expertise.",
  },
];

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Story | MultiChoice Smart Security & Automation</title>
        <meta
          name="description"
          content="Discover the journey of MultiChoice — innovators in smart home security, automation, solar power, and trusted protection solutions."
        />
        <meta
          name="keywords"
          content="smart security, home automation, electric fence, solar power, fire detection, MultiChoice"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/our-story" />
      </Helmet>

      <section aria-label="Our story main image" className="relative w-full z-30">
        <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden">
          <img
            loading="lazy"
            src={ourstory}
            alt="Exterior view of a modern smart home secured by MultiChoice systems"
            className="w-full h-[90vh] object-cover"
          />
        </div>

        <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden">
          <img
            loading="lazy"
            src={ourstory}
            alt="Mobile view of modern smart home secured by MultiChoice systems"
            className="w-full h-[50vh] object-cover"
          />
        </div>
      </section>

      <section
        aria-labelledby="our-journey-heading"
        className="bg-black relative top-20 text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <article className="space-y-12 text-center mb-16 overflow-hidden">
            <header>
              <h1
                id="our-journey-heading"
                className="text-4xl font-bold mb-4 text-yellow-500"
                data-aos="fade-left"
              >
                Our Journey Begins
              </h1>
            </header>
            <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-right">
              From a small idea to a bold mission, MultiChoice was built on the
              foundation of innovation, security, and trust. Our goal? To protect
              homes and empower lives.
            </p>
          </article>

          <article className="space-y-12 text-center mb-16 overflow-hidden">
            <h2
              className="text-4xl font-bold mb-4 text-yellow-500"
              data-aos="fade-left"
            >
              Driven by Innovation
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-right">
              We stay ahead with smart alarm systems, CCTV surveillance, and
              automated home solutions that redefine modern safety.
            </p>
          </article>

          <article className="space-y-12 text-center mb-16 overflow-hidden">
            <h2
              className="text-4xl font-bold mb-4 text-yellow-500"
              data-aos="fade-left"
            >
              Powered by Purpose
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-right">
              Every solution we offer is designed to make your life safer,
              simpler, and smarter—from solar energy to fire protection.
            </p>
          </article>

          <article className="space-y-12 text-center mb-16 overflow-hidden">
            <h2
              className="text-4xl font-bold mb-4 text-yellow-500"
              data-aos="fade-left"
            >
              A Vision for the Future
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-right">
              As technology evolves, so do we. We're committed to offering advanced,
              accessible security that adapts to your world.
            </p>
          </article>

          {/* Icon Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {cardData.map((card, idx) => (
              <article
                key={idx}
                className="bg-white text-black rounded-xl shadow-lg p-6 hover:shadow-yellow-500/40 transition duration-300"
                data-aos="zoom-in-down"
                role="listitem"
              >
                <div className="mb-4" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Additional story images" className="mt-20">
        <img
          src={ourstory2}
          className="w-full"
          data-aos="zoom-in-down"
          alt="MultiChoice team installing security systems at a residential property"
        />
        <img
          src={homestructure}
          className="w-full mt-10"
          data-aos="zoom-in-up"
          alt="Smart home infrastructure showing integrated security systems"
        />
      </section>
    </>
  );
};

export default OurStory;
