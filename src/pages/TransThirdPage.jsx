import React from "react";
import Complete from "../assets/images/complete.png";
import { Link } from "react-router-dom";

export default function TransThirdPage() {
  return (
    <div>
      <div className="flex items-center flex-col justify-center gap-5 mb-10">
        <h3 className="text-primary font-semibold text-4xl mb-2">
          Yay! Completed
        </h3>
        <img src={Complete} alt="complete" />
        <p className="text-center font-light text-lg text-abu mb-7">
          We will inform you via email later
          <br /> once the transaction has been accepted
        </p>
        <Link
          to="/"
          className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-white font-medium capitalize"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
