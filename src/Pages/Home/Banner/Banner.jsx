import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import image5 from "../../../assets/images/banner/5.jpg";
import image6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full h-full lg:h-[600px] rounded-xl" />
        <div className="absolute w-full rounded-xl  items-center h-full top-0 left-0 flex bg-gradient-to-r from-[rgb(21,21,21,100%)] bg-opacity-60 to-[rgb(21,21,21,0.1%)] ">
          <div className="space-y-7 pl-12 text-[#fff] w-1/2">
            <h2 className="font-bold font-inter text-6xl lg:w-[463px] w-full leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="font-inter text-xl font-normal leading-8  capitalize lg:w-[520px] w-full text-[rgb(255,255,255)]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-x-5 ">
              <button className="btn text-[#fff] btn-secondary">
                Discover More
              </button>
              <button className="btn btn-outline text-[#fff] btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-x-5 justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowLeftLong></FaArrowLeftLong>
            </a>
            <a
              href="#slide2"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl h-full lg:h-[600px]" />
        <div className="absolute w-full rounded-xl  items-center h-full top-0 left-0 flex bg-gradient-to-r from-[rgb(21,21,21,100%)] bg-opacity-60 to-[rgb(21,21,21,0.1%)] ">
          <div className="space-y-7 pl-12 text-[#fff] w-1/2">
            <h2 className="font-bold font-inter text-6xl lg:w-[463px] w-full leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="font-inter text-xl font-normal leading-8  capitalize lg:w-[520px] w-full text-[rgb(255,255,255)]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-x-5 ">
              <button className="btn text-[#fff] btn-secondary">
                Discover More
              </button>
              <button className="btn btn-outline text-[#fff] btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-x-5 justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowLeftLong></FaArrowLeftLong>
            </a>
            <a
              href="#slide3"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl h-full lg:h-[600px]" />
        <div className="absolute w-full rounded-xl  items-center h-full md:top-0 md:left-0 flex bg-gradient-to-r from-[rgb(21,21,21,100%)] bg-opacity-60 to-[rgb(21,21,21,0.1%)] ">
          <div className="space-y-7 pl-12 text-[#fff] md:w-1/2">
            <h2 className="font-bold font-inter text-[#fff] text-xl md:text-6xl lg:w-[463px] w-full md:leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="font-inter text-xl font-normal leading-8  capitalize lg:w-[520px] w-full text-[rgb(255,255,255)]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-x-5 ">
              <button className="btn text-[#fff] btn-secondary">
                Discover More
              </button>
              <button className="btn btn-outline text-[#fff] btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-x-5 justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowLeftLong></FaArrowLeftLong>
            </a>
            <a
              href="#slide4"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-xl h-full lg:h-[600px]" />
        <div className="absolute w-full rounded-xl  items-center h-full top-0 left-0 flex bg-gradient-to-r from-[rgb(21,21,21,100%)] bg-opacity-60 to-[rgb(21,21,21,0.1%)] ">
          <div className="space-y-7 pl-12 text-[#fff] w-1/2">
            <h2 className="font-bold font-inter text-6xl lg:w-[463px] w-full leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="font-inter text-xl font-normal leading-8  capitalize lg:w-[520px] w-full text-[rgb(255,255,255)]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-x-5 ">
              <button className="btn text-[#fff] btn-secondary">
                Discover More
              </button>
              <button className="btn btn-outline text-[#fff] btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-x-5 justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowLeftLong></FaArrowLeftLong>
            </a>
            <a
              href="#slide1"
              className="btn border-none bg-[#FF3811] btn-circle"
            >
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
