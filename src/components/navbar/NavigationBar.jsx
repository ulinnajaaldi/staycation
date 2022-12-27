import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <div className="py-5 px-[9.375rem] flex justify-between items-center border-b border-[#E5E5E5]">
        <h1 className="text-secondary font-medium text-2xl">
          Stay<span className="text-primary">cation.</span>
        </h1>
        <div className="flex gap-8 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-secondary" : "text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-secondary" : "text-primary"
            }
          >
            Browse By
          </NavLink>
          <NavLink
            to="/stories"
            className={({ isActive }) =>
              isActive ? "text-secondary" : "text-primary"
            }
          >
            Stories
          </NavLink>
          <NavLink
            to="/agents"
            className={({ isActive }) =>
              isActive ? "text-secondary" : "text-primary"
            }
          >
            Agents
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
