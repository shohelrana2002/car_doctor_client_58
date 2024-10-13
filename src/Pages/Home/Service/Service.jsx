import React, { useEffect, useState } from "react";

import ServiceCard from "./ServiceCard";
const Service = () => {
  const [services, setServices] = useState([]);
  // https://crud-car-genius-server-58-lq3pqi7sf.vercel.app
  useEffect(() => {
    fetch("https://crud-car-genius-server-58-lq3pqi7sf.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="text-center">
      <p className="font-bold  text-xl font-inter text-orange-0 my-5">
        Service
      </p>
      <h3 className="font-bold text-5xl font-inter leading-[45px] text-[#151515]">
        Our Service Area
      </h3>
      <p className="font-normal font-inter text-base my-5 mx-auto text-[#737373] w-full lg:w-[717px]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="grid grid-cols-1 gap-5 lg:mt-16 lg:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
