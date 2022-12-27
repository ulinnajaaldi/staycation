import React from "react";
import Banner from "../assets/images/banner.png";
import Footer from "../components/footer/Footer";

import icCities from "../assets/icons/ic_cities.png";
import icTraveler from "../assets/icons/ic_traveler.png";
import icTreasure from "../assets/icons/ic_treasure.png";

const LandingPage = (props) => {
  return (
    <>
      {/* Hero Selection */}
      <div className="flex px-[9.375rem] py-[4.313rem] gap-40">
        <div>
          <h1 className="font-bold text-[2.625rem] text-primary">
            Forget Busy Work, Start Next Vacation
          </h1>
          <p className="font-light text-abu w-2/3 leading-[27.2px] pt-5 pb-8">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <button className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-white font-medium capitalize">
            Show Me Now
          </button>

          <div className="pt-20 flex gap-[51px]">
            <div>
              <img src={icTraveler} alt="ic-travelers" />
              <p className="pt-[10px] font-medium">
                80,409 <span className="font-light text-abu">travelers</span>
              </p>
            </div>
            <div>
              <img src={icTreasure} alt="ic-treasure" />
              <p className="pt-[10px] font-medium">
                862 <span className="font-light text-abu">treasure</span>
              </p>
            </div>
            <div>
              <img src={icCities} alt="ic-cities" />
              <p className="pt-[10px] font-medium">
                1,492 <span className="font-light text-abu">cities</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={Banner} alt="Banner" className="max-w-[559px] " />
        </div>
        {/* Hero Selection Clear */}
      </div>
      {/* Footer */}
      <Footer />
      {/* Footer Clear */}
    </>
  );
};

export default LandingPage;
