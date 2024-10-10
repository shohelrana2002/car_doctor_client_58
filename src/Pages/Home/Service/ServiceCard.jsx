import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card border-1  border-[#FFFFFF] bg-base-100 w-full shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={img} className="rounded-xl h-full " />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title font-bold text-2xl font-inter text-[#444444]">
          {title}
        </h2>

        <div className="card-actions mt-4 text-orange-0">
          <p className="text-start font-bold font-inter text-xl">
            Price : ${price}
          </p>
          <Link
            to={`/checkout/${_id}`}
            className=" text-start font-bold font-inter text-xl"
          >
            <FaArrowRightLong></FaArrowRightLong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
