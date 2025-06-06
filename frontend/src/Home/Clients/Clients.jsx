import React from "react";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import client3 from "../../images/client3.png";
import client4 from "../../images/client4.png";
import client5 from "../../images/client5.png";
import client6 from "../../images/client6.png";
import client7 from "../../images/client7.png";
import client9 from "../../images/client9.png";
import client10 from "../../images/client10.png";
import client11 from "../../images/client11.png";
import client12 from "../../images/client12.png";
import client13 from "../../images/client13.png";

const Clients = () => {
  const clients = [
    client1,
    client10,
    client11,
    client12,
    client13,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client9,
  ];

  return (
    <section
      className="w-full px-4 py-10 overflow-hidden"
      aria-label="Our Clients"
    >
      <div className="whitespace-nowrap relative">
        <div className="animate-scroll flex gap-10">
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              src={client}
              alt={`Client logo ${index + 1}`}
              className="h-12 md:h-20 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
