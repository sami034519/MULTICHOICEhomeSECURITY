import React, { useEffect, useState } from "react";
import crousal3 from "../../images/solar energy.png";
import mobilecrousal5 from "../../images/mobilecrousal5.jpg";
import "animate.css";

function Crousal5({ active }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      // Reset animation first
      setAnimate(false);

      // Trigger it again after a small delay
      const timeout = setTimeout(() => setAnimate(true), 50);

      // Cleanup on unmount or prop change
      return () => clearTimeout(timeout);
    }
  }, [active]);

  return (
    <>
      <div className=" hidden lg:block relative w-full h-[80vh] overflow-hidden z-30">
        {/* Background Image */}
        <img
          loading="lazy"
          src={crousal3}
          alt="Background"
          className="w-full h-[200px] lg:h-[80vh] object-cover"
        />

        {/* Overlay Div */}
        <div
          className={`absolute lg:w-[60%] w-[301px] top-0 left-0 h-[200px] lg:h-[80vh] bg-black bg-opacity-30 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        {/* Text Content */}
        <div
          className={`absolute top-28 lg:top-[200px] left-3 transform -translate-y-1/2 text-white transition-all duration-1000 ${
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
            CLEAN ENERGY
          </h1>
          <div>
            <h1
              className={`lg:text-[60px] text-xl font-extrabold lg:font-bold lg:mb-1 lg:mt-16 text-yellow-400 ${
                animate
                  ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                  : ""
              }`}
            >
              EXTRA PWOER
            </h1>
            <h1
              className={`lg:text-[60px] text-xl font-extrabold lg:font-bold mb-2 lg:mb-10 lg:mt-6 text-yellow-400 ${
                animate
                  ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                  : ""
              }`}
            >
              SOLAR SYSTEMS
            </h1>
          </div>
          <p
            className={`lg:text-lg text-xs w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Our Solar Energy solutions offer a smart and sustainable way to
            power your home or business.{" "}
            <span className="lg:block hidden">
              We provide high-efficiency solar panel systems designed for
              maximum performance, durability.
            </span>
          </p>
        </div>
      </div>
      {/* mobile  */}
      <div className="block lg:hidden relative w-full h-[80vh] overflow-hidden z-30">
        {/* Background Image */}
        <img
          loading="lazy"
          src={mobilecrousal5}
          alt="Background"
          className="w-full  lg:h-[80vh] object-cover"
        />

        {/* Overlay Div */}
        <div
          className={`absolute lg:w-[60%] w-[70%] top-0 left-0 h-full lg:h-[80vh] bg-black bg-opacity-10 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        {/* Text Content */}
        <div
          className={`absolute top-[200px] lg:top-[200px] left-3 transform -translate-y-1/2 text-white transition-all duration-1000 ${
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
            CLEAN ENERGY
          </h1>
          <div>
            <h1
              className={`lg:text-[60px] mb-3 text-3xl font-extrabold lg:font-bold lg:mb-1 lg:mt-16 text-yellow-400 ${
                animate
                  ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                  : ""
              }`}
            >
              EXTRA PWOER
            </h1>
            <h1
              className={`lg:text-[60px] text-3xl font-extrabold lg:font-bold mb-3 lg:mb-10 lg:mt-6 text-yellow-400 ${
                animate
                  ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                  : ""
              }`}
            >
              SOLAR SYSTEMS
            </h1>
          </div>
          <p
            className={`lg:text-lg text-xs w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Our Solar Energy solutions offer a smart and sustainable way to
            power your home or business.{" "}
            <span className="lg:block hidden">
              We provide high-efficiency solar panel systems designed for
              maximum performance, durability.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Crousal5;
