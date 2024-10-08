import React from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import checkoutPng from "../../assets/images/checkout/checkout.png";
const Checkout = () => {
  const services = useLoaderData();
  const { _id, title, img, email } = services;
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    // const message = form.message.value;
    const bookingInfo = {
      Service_id: _id,
      CustomerName: name,
      email,
      Service_title: title,
      date,
      Price: price,
      img,
    };
    console.log(bookingInfo);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="">
      <NavBar></NavBar>

      <div>
        <div
          className="hero rounded-xl"
          style={{
            backgroundImage: `url(${checkoutPng})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="rounded-xl  bg-gradient-to-r  from-[rgb(21,21,21,100%)] bg-opacity-60 to-[rgb(21,21,21,0.1%)] w-full h-full"></div>

          <div className="flex  justify-start items-start w-full ">
            <h1 className="mb-5 text-5xl text-[#fff] md:pl-24 md:py-36  font-bold">
              Check Out
            </h1>
          </div>
          <div className="mt-80">
            <p className="bg-[#FF3811] text-[#fff] rounded-t-3xl py-3 px-5">
              Home/Checkout
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleBookService} className="bg-[#F3F3F3] md:mt-32">
        <div className="grid grid-cols-1  lg:w-[946px] lg:h-full mx-auto w-full gap-4 md:grid-cols-2">
          <div className="form-control pt-8">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Fist Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control  pt-8">
            <label className="label">
              <span className="label-text">Select Date</span>
            </label>
            <input
              name="date"
              type="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              defaultValue={services?.email}
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="number"
              defaultValue={services?.price}
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="lg:w-[946px] my-5 lg:h-full mx-auto w-full">
          <div className="">
            <label htmlFor="message"></label>
            <textarea
              className="lg:w-[946px] w-full h-full lg:h-[321px]"
              name="message"
              id="message"
            >
              Message
            </textarea>
          </div>
          <div className="my-4">
            <input
              type="submit"
              value="Order Confirm"
              className="btn text-[#fff] font-semibold text-base font-inter bg-[#FF3811] btn-block"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
