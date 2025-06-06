import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { label: 'Happy Clients', target: 120 },
  { label: 'Employees', target: 35 },
  { label: 'Projects Completed', target: 85 },
  { label: 'Years of Experience', target: 10 },
];

const CompanyStats = () => {
  return (
    <section
      aria-label="Company statistics including clients, employees, projects, and experience"
      className="bg-yellow-500 my-8 lg:py-16 pb-5 px-4"
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-8 text-center"
        data-aos="fade-up"
      >
        {stats.map((stat, index) => (
          <article key={index} className="p-4 rounded-lg">
            <h3
              className="lg:text-6xl text-4xl font-bold text-black"
              aria-label={`${stat.target}+ ${stat.label.toLowerCase()}`}
            >
              <CountUp
                start={0}
                end={stat.target}
                duration={4}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce={false}
              />
            </h3>
            <p className="text-gray-600 font-medium mt-2 text-lg">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
