import React from "react";
import { Link } from "react-router-dom";
import datas from "../utils/datas";

const TransPage = (props) => {
  const data = datas[0];

  return (
    <>
      <div className="flex items-center flex-col justify-center mb-10">
        <h3 className="text-primary font-semibold text-4xl mb-1">
          Booking Information
        </h3>
        <p className="text-abu font-light text-lg">
          Please fill up the blank fields below
        </p>
      </div>
      <div className="flex items-center justify-center gap-20">
        <div className="flex flex-col gap-4">
          <img
            src={data.image}
            alt={data.name}
            className="max-w-[420px] rounded-xl"
          />
          <div className="flex justify-between">
            <div>
              <h3 className="text-primary text-xl ">{data.name}</h3>
              <p className="text-abu font-light">{data.address}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-primary font-medium">
                <span>Rp. </span>
                {data.price}
                <span>/ malam</span>
              </p>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal opacity-90"></div>

        {/* form  */}
        <div className="flex justify-center items-start flex-col text-primary w-[420px]">
          <label>
            <h3>First Name</h3>
            <input
              type="text"
              name="firstName"
              placeholder="Please type here ..."
              className="input bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
          <label>
            <h3>Last Name</h3>
            <input
              type="text"
              name="lastName"
              placeholder="Please type here ..."
              className="input bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
          <label>
            <h3>Email Address</h3>
            <input
              type="text"
              name="email"
              placeholder="Please type here ..."
              className="input bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
          <label>
            <h3>Phone Number</h3>
            <input
              type="text"
              name="phone"
              placeholder="Please type here ..."
              className="input bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 my-16">
        <Link
          to="/transaction/payment"
          className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-white font-medium capitalize"
        >
          Continue to Payment
        </Link>
        <Link
          to="/"
          className="btn btn-wide bg-[#F5F6F8] hover:bg-gray-300 hover:text-[#9b9a9a] border-none btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-[#B3B3B3] font-medium capitalize"
        >
          Cancel
        </Link>
      </div>
    </>
  );
};

export default TransPage;
