import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DetailBigImage from "../assets/images/detail-big.png";
import DetailSmallImage from "../assets/images/detail-small.png";

import Icbedroom from "../assets/icons/ic_bedroom.svg";
import IcLivingRoom from "../assets/icons/ic_livingroom.svg";
import IcBathroom from "../assets/icons/ic_bathroom.svg";
import IcDinningRoom from "../assets/icons/ic_diningroom.svg";
import IcWifi from "../assets/icons/ic_wifi.svg";
import IcAc from "../assets/icons/ic_ac.svg";
import IcKulkas from "../assets/icons/ic_kulkas.svg";
import IcTv from "../assets/icons/ic_tv.svg";

const feature = [
  {
    icon: Icbedroom,
    qty: 5,
    title: "Bedroom",
  },
  {
    icon: IcLivingRoom,
    qty: 1,
    title: "Living Room",
  },
  {
    icon: IcBathroom,
    qty: 3,
    title: "Bathroom",
  },
  {
    icon: IcDinningRoom,
    qty: 1,
    title: "Dinning Room",
  },
  {
    icon: IcWifi,
    qty: 100,
    title: "Mbp/s",
  },
  {
    icon: IcAc,
    qty: 7,
    title: "Unit Ready",
  },
  {
    icon: IcKulkas,
    qty: 2,
    title: "Refigrator",
  },
  {
    icon: IcTv,
    qty: 4,
    title: "Television",
  },
];

const DetailPage = () => {
  const { id } = useParams();
  const [dateRange, setDateRange] = useState([new Date(), null]);
  const [startDate, endDate] = dateRange;

  return (
    <Layout>
      <div className="w-full max-w-[1140px] mx-auto mt-[50px]">
        <div className="grid grid-cols-3 items-center">
          <div className="">
            Home / <span className="text-primary">House Details</span>
          </div>
          <div className=" text-center">
            <h1 className="text-primary font-semibold text-4xl">
              Village Angga
            </h1>
            <p className="font-light text-lg text-abu mt-1">Bogor, Indonesia</p>
          </div>
        </div>
        <div className="grid grid-flow-col gap-x-[10px] gap-y-[10px] mt-[50px]">
          <div className="col-span-2 row-span-2  ">
            <img
              src={DetailBigImage}
              className="w-[643px] rounded-[15px] h-[500px]"
              alt=""
            />
          </div>
          <div className="">
            <img
              src={DetailSmallImage}
              className="w-[487px] rounded-[15px] "
              alt=""
            />
          </div>
          <div className="">
            <img
              src={DetailSmallImage}
              className="w-[487px] rounded-[15px] "
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-flow-col my-[50px]">
          <div className="col-span-2 row-span-2 ">
            <div className="w-[643px] pr-8">
              <div className="text-primary font-medium text-xl">
                About the place
              </div>
              <p className="font-light text-base text-abu mt-2.5">
                Minimal techno is a minimalist subgenre of techno music. It is
                characterized by a stripped-down aesthetic that exploits the use
                of repetition and understated development. Minimal techno is
                thought to have been originally developed in the early 1990s by
                Detroit-based producers Robert Hood and Daniel Bell.
              </p>
              <div className="grid grid-cols-4 gap-x-[50px] gap-y-5 mt-[30px]">
                {feature.map((item) => (
                  <div className="">
                    <img src={item.icon} alt="" className="w-9 h-9" />
                    <p className="font-light text-base text-abu mt-2">
                      {" "}
                      <span
                        className="text-primary font-medium
                  "
                      >
                        {item.qty}
                      </span>{" "}
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" col-span-2 ">
            <div className="w-[487px] border border-abu h-[550px] px-[83px] py-[62px]  rounded-[15px]">
              <div className="text-primary text-xl font-medium">
                Start Booking
              </div>
              <div className="font-light text-abu text-4xl my-[14px]">
                <span className="font-medium text-[#1ABC9C]">$280 </span>
                per night
              </div>
              <div className="font-normal text-base text-primary mb-2">
                Pick a Date
              </div>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                withPortal
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
