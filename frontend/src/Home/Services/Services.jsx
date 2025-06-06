import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import smartalarm from "../../images/smartalarmsystem.jpg";
import doorautomation from "../../images/doorautomations.jpg";
import cctv from "../../images/cctv.jpg";
import fencesystem from "../../images/fencesystem (2).jpeg";
import solarsystem from "../../images/solarsystem.webp";
import firedetection from "../../images/firedetections.jpg";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    { img: smartalarm, title: "SMART ALARM SYSTEM", path: "/smart-alarm-system" },
    { img: cctv, title: "CCTV SURVELLIENCE", path: "/cctv-surveillance" },
    { img: doorautomation, title: "DOOR AUTOMATION", path: "/smart-Door-automation" },
    { img: fencesystem, title: "ELECTRIC FENCE SYSTEM", path: "/electric-fence" },
    { img: solarsystem, title: "HOME SOLAR SYSTEM", path: "/solar-energy" },
    { img: firedetection, title: "AUTO FIRE DETECTION", path: "/fire-detection-system" },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center mt-12 lg:mt-24 lg:pl-10">
        <h1
          className="text-4xl font-bold text-black border-yellow-500 border-b-4 mb-10"
          data-aos="zoom-in-down"
        >
          OUR SERVICES
        </h1>
      </div>

      <section
        aria-label="Our Services"
        className="grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-x-4 mb-9 lg:pt-20 lg:px-56 gap-y-5"
      >
        {services.map((card, i) => (
          <article
            key={i}
            className="max-w-96 rounded-tl-3xl rounded-br-3xl overflow-hidden border-2 border-slate-200 pb-5 shadow-red-100 bg-yellow-200 hover:shadow-lg hover:bg-yellow-50 transition-all duration-300 w-80 lg:w-[300px]"
            data-aos="fade-up"
          >
            <Link
              to={card.path}
              aria-label={`Learn more about ${card.title}`}
              className="flex flex-col items-center justify-center text-center gap-5 no-underline text-black"
            >
              <img
                loading="lazy"
                className="h-64 rounded-tl-3xl w-80 lg:w-[300px]"
                src={card.img}
                alt={`${card.title} `}
              />
              <h2 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                {card.title}
              </h2>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

export default Services;
