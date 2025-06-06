import React, { useEffect, useState } from "react";
import crousal1 from "../../images/securitycrousal1.jpg";
import mobilecrousal1 from "../../images/mobilecrousal1.jpg";
import "animate.css";

function Crousal1({ active }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      setAnimate(false);
      const timeout = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  return (
    <>
      {/* Desktop View */}
      <section className="hidden lg:block relative w-full h-[80vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={crousal1}
          alt="Secure home background  for MULTICHOICE SECURITY"
          className="w-full h-[200px] lg:h-[80vh] object-cover"
        />

        <div
          className={`absolute lg:w-[40%] w-[301px] top-0 left-0 h-[200px] lg:h-[80vh] bg-black bg-opacity-30 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute top-28 lg:top-[200px] left-4 transform -translate-y-1/2 text-white transition-all duration-1000 ${
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
            Welcome To
          </h1>
          <div>
            <h2
              className={`lg:text-[60px] text-xl font-extrabold lg:font-bold lg:mb-1 lg:mt-16 text-yellow-400 ${
                animate
                  ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                  : ""
              }`}
            >
              MULTICHOICE
            </h2>
            <h2
              className={`lg:text-[60px] text-xl font-extrabold lg:font-bold mb-2 lg:mb-10 lg:mt-6 text-yellow-400 ${
                animate
                  ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                  : ""
              }`}
            >
              HOME SECURITY
            </h2>
          </div>
          <p
            className={`lg:text-lg text-xs w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Protecting What Matters Most — Your Home, Your Peace. Reliable, and
            scalable{" "}
            <span className="lg:block hidden">
              Smart Security Solutions for Safer Homes.
            </span>
          </p>
        </div>
      </section>

      {/* Mobile View */}
      <section className="block lg:hidden relative w-full h-[80vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={mobilecrousal1}
          alt="Mobile background  showing home protection concept"
          className="w-full lg:h-[80vh] object-cover"
        />

        <div
          className={`absolute lg:w-[40%] w-screen top-0 left-0 lg:h-[80vh] bg-black bg-opacity-10 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute top-[300px] lg:top-[200px] left-4 transform -translate-y-1/2 text-white transition-all duration-1000 ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h1
            className={`lg:text-[80px] text-2xl font-bold lg:mt-28 ${
              animate
                ? "animate__animated animate__fadeInDownBig animate__delay-1s"
                : ""
            }`}
          >
            Welcome To
          </h1>
          <p
            className={`lg:text-[60px] text-4xl font-extrabold mt-3 lg:font-bold leading-10 py-4 lg:mb-1 lg:mt-16 text-white ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            MULTICHOICE <br /> HOME SECURITY
          </p>
          <p
            className={`lg:text-lg text-sm w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Protecting What Matters Most — Your Home, Your Peace. Reliable, and
            scalable{" "}
            <span className="lg:block hidden">
              Smart Security Solutions for Safer Homes.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Crousal1;
