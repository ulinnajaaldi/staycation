import React from "react";
import { NavLink } from "react-router-dom";

export default function StepNavigation() {
  const steps = [
    { label: "1", link: "/transaction" },
    { label: "2", link: "/transaction/payment" },
    { label: "3", link: "/transaction/checkout" },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-5 border-b border-[#E5E5E5]">
        <h1 className="text-secondary font-medium text-2xl">
          Stay<span className="text-primary">cation.</span>
        </h1>
      </div>
      <div className="flex items-center justify-center text-[#898989] gap-[60px] py-12">
        {steps.map((step, index) => (
          <NavLink
            key={index}
            to={step.link}
            className={`w-[50px] h-[50px] bg-[#E5E5E5] rounded-full flex items-center justify-center   font-light text-2xl ${
              window.location.pathname === step.link
                ? "bg-blue-500 text-white font-medium"
                : ""
            }`}
          >
            {step.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
