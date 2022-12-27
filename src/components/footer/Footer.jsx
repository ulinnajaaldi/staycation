import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-[9.375rem] footer p-10 bg-white text-base-content border-t border-[#E5E5E5]">
        <div>
          <h1 className="text-secondary font-medium text-2xl">
            Stay<span className="text-primary">cation.</span>
          </h1>
          <p className="text-abu">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div>
          <span className="footer-title text-primary opacity-100">
            Services
          </span>
          <a className="link link-hover text-abu">Branding</a>
          <a className="link link-hover text-abu">Design</a>
          <a className="link link-hover text-abu">Marketing</a>
          <a className="link link-hover text-abu">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-primary opacity-100">Company</span>
          <a className="link link-hover text-abu">About us</a>
          <a className="link link-hover text-abu">Contact</a>
          <a className="link link-hover text-abu">Jobs</a>
          <a className="link link-hover text-abu">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-primary opacity-100">Legal</span>
          <a className="link link-hover text-abu">Terms of use</a>
          <a className="link link-hover text-abu">Privacy policy</a>
          <a className="link link-hover text-abu">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
