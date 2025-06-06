import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You need to import the CSS
import { useEffect } from "react";
import introimage from "../../images/introimage.jpg";
import securitylogo from "../../images/mysecuritylogofinal.png";
import homepic from "../../images/homepic1.jpg";
function Introduction() {
 const phoneNumber = "92333886978"; // ✅ Correct format (Pakistan number without +)
const message = "Hello DevMotive! I Want To Know About Your Services..";
const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const handleClick = () => {
  window.open(whatsappUrl, "_blank");
};

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div>
        <div className=" lg:mt-28 mt-16 flex-col  lg:flex-row flex gap-4 lg:gap-14 justify-center items-center mb-10 overflow-hidden">
          <div className="relative overflow-hidden">
            <img
              src={introimage}
              className=" lg:w-[400px] lg:h-[450px] h-[350px] w-[300px]"
              data-aos="zoom-in"
              alt=""
            />
            <div className="absolute left-0  top-0 h-full p-4 w-full ">
              <img
                className="lg:max-w-[140px] max-w-[100px] bg-white rounded p-1 "
                src={securitylogo}
                alt=""
                data-aos="flip-left"
              />
            </div>
          </div>
          <div className="lg:max-w-[40%] text-startlg:pl-0 pl-8">
            <h1 className="text-2xl font-bold" data-aos="fade-down">
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
              <div
                className="bg-yellow-500 rounded pt-1 max-w-[162px]"
                data-aos="flip-up"
              >
                <button onClick={handleClick} className="bg-black hover:bg-green-800 w-[162px] text-white rounded text-lg font-medium px-4 py-2">
                  CONTACT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home picture  */}
      <div className="w-full">
        <img className="w-full h-[15vh] lg:h-[30vh]" src={homepic} alt="" />
      </div>
    </>
  );
}

export default Introduction;
