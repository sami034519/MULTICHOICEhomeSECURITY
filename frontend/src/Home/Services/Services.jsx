import React from "react";
import { useEffect } from "react";
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
  return (
    <>
      <div className="w-full flex justify-center items-center mt-12 lg:mt-24 lg:pl-10">
        <h1 className="text-4xl font-bold text-black border-yellow-500 border-b-4 mb-10" data-aos="zoom-in-down">
          OUR SERVICES
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-x-4 mb-9 lg:pt-20 lg:px-56 gap-y-5">
        {[
          {
            img: smartalarm,
            title: "SMART ALARM SYSTEM",
            path: "/smart-alarm-system",
          },
          {
            img: cctv,
            title: "CCTV SURVELLIENCE",
            path: "/cctv-surveillance",
          },
          {
            img: doorautomation,
            title: "DOOR AUTOMATION",
            path: "/smart-Door-automation",
          },
          {
            img: fencesystem,
            title: "ELECTRIC FENCE SYSTEM",
            path: "/electric-fence",
          },
          {
            img: solarsystem,
            title: "HOME SOLAR SYSTEM",
            path: "/solar-energy",
          },
          {
            img: firedetection,
            title: "AUTO FIRE DETECTION",
            path: "/fire-detection-system",
          },
        ].map((card, i) => (
          <Link
            key={i}
            to={card.path}
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                         rounded-tl-3xl rounded-br-3xl overflow-hidden lg:w-[300px] w-80 transition-all duration-300 
                         shadow-red-100 bg-slate-00 hover:shadow-yellow-500 bg-yellow-200 hover:shadow-lg hover:bg-yellow-50 no-underline text-black"
            data-aos="fade-up"
          >
            <div>
              <img
                loading="lazy"
                className="h-64 rounded-tl-3xl w-80  lg:w-[300px]"
                src={card.img}
                alt={card.title}
                
              />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                {card.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Services;
