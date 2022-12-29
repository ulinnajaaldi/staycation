import React from "react";
import icBca from "../assets/icons/ic_bca.png";
import icMandiri from "../assets/icons/ic_mandiri.png";
import { Link } from "react-router-dom";

import datas from "../utils/datas";

export default function TransSecondPage() {
  const data = datas[0];
  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-10">
        <h3 className="text-primary font-semibold text-4xl mb-1">Payment</h3>
        <p className="text-abu font-light text-lg">
          Kindly follow the instructions below
        </p>
      </div>

      <div className="flex items-center justify-center gap-20">
        <div className="w-[330px] text-primary flex flex-col items-center justify-center gap-5">
          <p className="text-base font-normal w-[223px]">Transfer Pembayaran</p>

          <div className="flex flex-col gap-[10px] w-[223px]">
            <p className="text-base font-normal">
              Tax: <span className="font-medium">10%</span>
            </p>
            <p className="text-base font-normal">
              Sub total: <span className="font-medium">{data.harga}</span>
            </p>
            <p className="text-base font-normal">
              Total: <span className="font-medium">{data.harga}</span>
            </p>
          </div>

          <div className="flex items-start justify-start gap-4 w-[223px]">
            <img src={icBca} alt="ic_bca" />
            <div className="text-base font-normal leading-[27.2px]">
              <p>Bank Central Asia</p>
              <p>2208 1996</p>
              <p>Aldilla Ulinnaja</p>
            </div>
          </div>

          <div className="flex items-start justify-start gap-4 w-[223px]">
            <img src={icMandiri} alt="ic_mandiri" />
            <div className="text-base font-normal leading-[27.2px]">
              <p>Bank Mandiri</p>
              <p>2301 1993</p>
              <p>Sigit Wahyudi</p>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal opacity-90"></div>

        <div className="flex justify-center items-start flex-col text-primary w-[330px]">
          <label>
            <h3>Upload Bukti Transfer</h3>
            <input
              type="file"
              className="file-input file-input-accent bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
          <label>
            <h3>Asal Bank</h3>
            <input
              type="text"
              placeholder="Please type here ..."
              className="input bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
          <label>
            <h3>Nama Pengirim</h3>
            <input
              type="text"
              placeholder="Please type here ..."
              className="input bg-[#F5F6F8] in w-[320px] mt-2 mb-5"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 my-16">
        <Link
          to="/transaction/checkout"
          className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-white font-medium capitalize"
        >
          Continue to Checkout
        </Link>
        <Link
          to="/transaction"
          className="btn btn-wide bg-[#F5F6F8] hover:bg-gray-300 hover:text-[#9b9a9a] border-none btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-[#B3B3B3] font-medium capitalize"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
