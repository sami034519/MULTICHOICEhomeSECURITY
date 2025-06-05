import React, { useEffect, useState } from "react";
import { FaVideo, FaMobileAlt, FaUserShield } from "react-icons/fa";
import crousal1 from "./images/cctv.jpg";
import mobilecrousal1 from "./images/cctvservice.jpg";
import cctvservice2 from "./images/cctvservice2.jpg";
import cctvservice3 from "./images/cctvservice3final.png";
import darkcctv from "./images/darkcctv.JPG";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";


import homestructure from "./images/homestructuref.JPG";

function CCTV2() {
  const cards = [
    {
      icon: <FaVideo size={40} className="text-yellow-500 mx-auto mb-4" />,
      title: "24/7 Video Monitoring",
      description:
        "Keep an eye on your property at all times with continuous HD surveillance.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-yellow-500 mx-auto mb-4" />,
      title: "Remote Access",
      description:
        "View live footage and recorded videos remotely via mobile apps, anytime, anywhere.",
    },
    {
      icon: <FaUserShield size={40} className="text-yellow-500 mx-auto mb-4" />,
      title: "Motion Detection Alerts",
      description:
        "Receive instant notifications for any suspicious activity detected on your premises.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={crousal1}
          alt="Smart Home Security"
          className="w-full h-[90vh] object-cover"
        />

        <div
          className={`absolute lg:w-full top-0 left-0 h-[90vh] bg-black bg-opacity-30 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute top-[200px] left-4 transform -translate-y-1/2 text-white transition-all duration-1000 ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h1
            className={`lg:text-[80px] text-xl font-semibold lg:mt-28 ${
              animate
                ? "animate__animated animate__fadeInDownBig animate__delay-1s"
                : ""
            }`}
          >
            RECORDING
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold lg:mb-1 lg:mt-16 text-yellow-300 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SMART
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold mb-2 lg:mb-10 lg:mt-6 text-yellow-300 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            HOME CCTV
          </h1>
          <p
            className={`lg:text-lg text-xs w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Protecting What Matters Most — Your Home, Your Peace. Reliable, and
            scalable
            <span className="lg:block hidden">
              {" "}
              Smart Security Solutions for Safer Homes.
            </span>
          </p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={mobilecrousal1}
          alt="Smart Home Security Mobile"
          className="w-full h-[50vh] object-cover"
        />

        <div
          className={`absolute w-screen top-0 left-0 h-[50vh] bg-black bg-opacity-10 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute top-[120px] left-4 transform -translate-y-1/2  transition-all duration-1000 ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <p
            className={`text-5xl font-extrabold mt-3 leading-10 py-4 text-yellow-300 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SMART <br /> HOME CCTV
          </p>
        </div>
      </div>
      <section className="pt-12 z-30  relative bg-white">
        <div className="flex justify-center items-center w-full">
          <h1
            className="lg:text-5xl text-gray-700 text-3xl font-bold border-b-4 border-yellow-500"
            data-aos="zoom-in-down"
          >
            CCTV SURVEILLANCE
          </h1>
        </div>

        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-5"
            data-aos="fade-left"
          >
            Our advanced CCTV Surveillance systems offer 24/7 real-time video
            monitoring to keep your home and business secure. With
            high-definition cameras, motion detection, night vision, and remote
            access via mobile apps, you can monitor every corner from anywhere
            at any time. Trust MultiChoice to deliver reliable and intelligent
            video surveillance for complete peace of mind.
          </p>
        </div>

        {/* card  */}
        <section className="py-16 px-4 lg:px-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition duration-300"
                data-aos="zoom-in-down"
              >
                {card.icon}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* image intro  */}
        <div>
          <div className="flex w-full items-center bg-slate-100 justify-center pb-5 overflow-hidden">
            <div>
              <div className="w-full flex justify-center items-center pt-10">
                <p className="lg:max-w-full max-w-xs text-center text-4xl font-bold">
                  REMOTE VIEW FROM ANYWHERE IN THE WORLD
                </p>
              </div>
              <div className="w-full flex justify-center items-center pb-10 pt-5">
                <p className="text-center lg:max-w-full max-w-xs">
                  Keep an eye on everything that matters & access recorded
                  footage from your mobile & computer.
                </p>
              </div>

              <div className="w-full flex justify-center">
                <img
                  src={cctvservice2}
                  className="lg:max-w-3xl"
                  data-aos="zoom-in-left"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* design */}
        <div className="lg:p-10 p-3 bg-yellow-400">
          {" "}
          <img className="w-full" src={cctvservice3} alt="" />
        </div>
        {/* benifits  */}
        <div className="flex justify-center items-center pt-7 lg:pt-20 w-full">
          <h1
            className="lg:text-5xl text-gray-900 text-center text-4xl font-bold "
            data-aos="zoom-in-down"
          >
            CLEAR DETAIL, WHEATHER IT'S BRIGHT OR DARK
          </h1>
        </div>

        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 text-xl lg:max-w-[90%] max-w-[95%] text-center pb-5 pt-5"
            data-aos="fade-left"
          >
            1080P HD image quality, Full Upgrade of video imaging effect, every
            detail is as delicate and real as you can see with your own eyes.
          </p>
        </div>
        {/* dark cctv image  */}
        <div className="w-full flex justify-center items-center pt-10 pb-5 bg-slate-100 mt-10 lg:mt-20">
          <div>
            <div className="flex justify-center items-center w-full">
              <h1
                className="lg:text-5xl text-gray-900 text-3xl font-bold "
                data-aos="zoom-in-down"
              >
                SEE IN THE DARK
              </h1>
            </div>
            <div className="flex justify-center items-center w-full overflow-hidden">
              <p
                className="text-gray-700 lg:max-w-[60%] max-w-[95%] text-center pb-12 pt-5"
                data-aos="fade-left"
              >
                More powerful infrared processing in order to have a clearer
                night vision effect. With High Definition Recording every
                details is captured.
              </p>
            </div>
            <img src={darkcctv} data-aos="zoom-in-up" alt="" />
          </div>
        </div>

        {/* home structure */}

        <img
          src={homestructure}
          className="lg:w-full w-screen lg:h-[70vh] lg:p-4 pb-4 h-[30vh]"
          alt=""
          data-aos="zoom-in-down"
        />
      </section>
      
    </>
  );
}

export default CCTV2;
