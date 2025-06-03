import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import logo from "../../images/securitylogosinglef.png";

const faqs = [
  {
    question: "Why choose MULTICHOICE for Smart Alarm Systems?",
    answer:
      "Our wireless Smart Alarm Systems are PTA approved and meet European standards, providing real-time alerts and full protection from intrusion, fire, gas leaks, and more.",
  },
  {
    question: "What does your Smart Home Automation service include?",
    answer:
      "We offer complete automation solutions including lighting, climate control, curtains, and appliances—all accessible remotely via mobile apps or voice commands.",
  },
  {
    question: "How reliable is your CCTV Surveillance service?",
    answer:
      "We provide high-definition, night vision-enabled CCTV systems with remote access, cloud backup, and motion alerts to keep your home or business secure 24/7.",
  },
  {
    question: "What is a Smart Auto Gate, and how does it help?",
    answer:
      "Our Smart Auto Gate systems allow you to open and close your gate remotely via phone or remote control, enhancing both convenience and security.",
  },
  {
    question: "How does your Electric Fence solution work?",
    answer:
      "Our electric fencing systems act as a powerful deterrent against intruders, with smart monitoring, instant breach alerts, and battery backup for uninterrupted protection.",
  },
];

const Whychoose = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 bg-black px-4 py-10 w-full">
      {/* Logo */}
      <div className="w-full lg:w-[30%] flex justify-center items-center">
        <img
          className="w-[200px] lg:w-[350px]"
          src={logo}
          alt="Logo"
          loading="lazy"
          data-aos="zoom-in-up"
        />
      </div>

      {/* FAQ Section */}
      <div className="w-full lg:w-[70%] py-6 px-2 sm:px-6">
        <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-8 text-center lg:text-left">
          Why Choose MULTICHOICE?
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300"
                data-aos="zoom-in-down"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
                >
                  <span className="text-left text-gray-800 font-medium text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span className="text-yellow-500">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 py-4 px-5' : 'max-h-0 py-0 px-5'
                  }`}
                >
                  <p className="text-gray-700 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
