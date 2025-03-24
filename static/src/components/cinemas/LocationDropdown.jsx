import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

export function LocationDropdown() {
  const locations = {
    singapore: ["Central Region"],
    japan: ["Tokyo", "Kanagawa", "Saitama"],
    indonesia: ["DKI Jakarta"],
    vietnam: ["Hanoi", "Ho Chi Minh City"],
    thailand: ["Bangkok"],
    india: ["Maharashtra", "West Bengal", "Delhi"],
    malaysia: ["Kuala Lumpur"]
  };

  const [country, setCountry] = useState("all");
  const [province, setProvince] = useState("all");
  const [openSetCountry, setOpenSetCountry] = useState(false);
  const [openSetProvince, setOpenOpenSetProvince] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-base w-full lg:w-fit py-4 lg:py-3 px-5 bg-dark-200 flex gap-2 lg:gap-3 items-center rounded-lg lg:rounded-full capitalize font-medium"
        onClick={() => {
          setOpenSetCountry(!openSetCountry);
          setCountry("all")
          setProvince("all")
        }}
      >
        <FaLocationDot className="text-base"/>
        {province !== "all"
          ? `${province}, ${country}`
          : "Pilih Lokasi"}
      </button>

      <div className="absolute right-0  mt-2  lg:p-2 w-full lg:w-fit bg-dark-250  lg:mt-4 flex  flex-col lg:flex-row-reverse gap-2">
        {
          openSetCountry ?
            <div>
              <h3 className="lg:hidden my-2 text-sm text-text-400">Select Country</h3>
              <ul className="bg-dark-200 lg:bg-dark-250 rounded-lg h-fit   w-full lg:w-52 ">
                {Object.keys(locations).map((flag) => (
                  <li key={flag}>
                    <button
                      className="hover:bg-dark-200  lg:text-base capitalize active:bg-dark-200 w-full h-full font-medium py-3 px-4 text-start first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => {
                        setCountry(flag)
                        setOpenOpenSetProvince(true)
                      }}
                      type={"button"}
                    >
                      {flag.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            : ""
        }

        {openSetProvince ?
          <div>
            <h3 className="lg:hidden my-2 text-sm text-text-400">Select Province</h3>
            <ul className="bg-dark-200 lg:bg-dark-250 rounded-lg w-full lg:w-52 ">
              {locations[country].map((provinceOption) => (
                <li key={provinceOption}>
                  <button
                    className="hover:bg-dark-200  text-nowrap capitalize active:bg-dark-200 w-full h-full font-medium py-3 px-4 text-start first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setOpenOpenSetProvince(false)
                      setOpenSetCountry(false)
                      setProvince(provinceOption)
                    }}
                  >
                    {provinceOption}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          :
          ""
        }
      </div>
    </div>
  );
}