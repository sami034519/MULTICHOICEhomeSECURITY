import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import introimage from "../../images/introimage.jpg";
import securitylogo from "../../images/mysecuritylogofinal.png";
import homepic from "../../images/homepic1.jpg";

function Introduction() {
  const phoneNumber = "92333886978"; // Pakistan number without +
  const message = "Hello DevMotive! I Want To Know About Your Services..";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <section aria-labelledby="intro-heading" className="lg:mt-28 mt-16 mb-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 justify-center items-center overflow-hidden">
          <figure className="relative overflow-hidden">
            <img
              src={introimage}
              alt="Smart Home Security System Installation"
              className="lg:w-[400px] lg:h-[450px] h-[350px] w-[300px]"
              data-aos="zoom-in"
            />
            <figcaption className="absolute left-0 top-0 h-full p-4 w-full">
              <img
                src={securitylogo}
                alt="Multichoice Home Security Logo"
                className="lg:max-w-[140px] max-w-[100px] bg-white rounded p-1"
                data-aos="flip-left"
              />
            </figcaption>
          </figure>

          <div className="lg:max-w-[40%] text-start lg:pl-0 pl-8">
            <h1
              id="intro-heading"
              className="text-2xl font-bold"
              data-aos="fade-down"
            >
              SMART HOMESECURITY COMPANY
            </h1>
            <p className="lg:py-6 py-4 text-gray-500" data-aos="fade-left">
              MULTICHOICE HOME SECURITY — Pakistan’s Leading Smart Home Security
              and Smart Solutions Provider Since 2006, MULTICHOICE HOME SECURITY
              has been dedicated to protecting what matters most to you. We
              specialize in delivering cutting-edge security equipment and
              advanced wireless Smart Alarm systems designed to safeguard your
              premises from intrusion, fire, flooding, and other threats. Our
              reliable services are available nationwide. MULTICHOICE HOME
              SECURITY Smart Alarm Systems meet the highest European standards
              and are fully PTA approved, ensuring you get the best in quality
              and compliance.
            </p>
            <p className="text-gray-500" data-aos="fade-right">
              Our comprehensive security solutions combine cutting-edge
              technology with reliability, ensuring peace of mind for families
              and businesses across Pakistan. With nationwide coverage and
              dedicated customer support, we’re committed to safeguarding what
              matters most to you.
            </p>
            <div className="lg:mt-7 mt-4">
              <div className="bg-yellow-500 w-[162px]  rounded pt-1" data-aos="flip-up">
                <button
                  onClick={handleClick}
                  className="bg-black  hover:bg-green-800 w-[162px] text-white rounded text-lg font-medium px-4 py-2"
                  aria-label="Contact Multichoice Home Security on WhatsApp"
                >
                  CONTACT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* home picture */}
      <div className="w-full">
        <img
          src={homepic}
          alt="Home exterior showing secure environment"
          className="w-full h-[15vh] lg:h-[30vh]"
        />
      </div>
    </>
  );
}

export default Introduction;
