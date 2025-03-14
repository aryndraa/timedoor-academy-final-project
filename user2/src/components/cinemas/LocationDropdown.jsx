import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

export function LocationDropdown() {
  const locations = {
    indonesia: ["bali", "jawa barat", "jawa tengah", "jawa timur"],
    usa: ["california", "texas", "new york", "florida"],
  };

  const [country, setCountry] = useState("all");
  const [province, setProvince] = useState("all");
  const [openSetCountry, setOpenSetCountry] = useState(false);
  const [openSetProvince, setOpenOpenSetProvince] = useState(false);

  const handleSetCountry = () => {
    setCountry("all");

  }

  return (
    <div className="relative">
      <button
        className="py-3 px-5 bg-dark-200 flex gap-3 items-center rounded-full capitalize font-medium"
        onClick={() => {
          setOpenSetCountry(!openSetCountry);
          setCountry("all")
          setProvince("all")
        }}
      >
        <FaLocationDot />
        {province !== "all"
          ? `${province}, ${country}`
          : "Pilih Lokasi"}
      </button>

      <div className="absolute right-0 mt-4 flex flex-row-reverse gap-2">
        <ul className={`bg-dark-250 rounded-lg h-fit w-52  ${
          openSetCountry ? "block" : "hidden"
        }`}>
          {Object.keys(locations).map((flag) => (
            <li key={flag}>
              <button
                className="hover:bg-dark-200 capitalize active:bg-dark-200 w-full h-full font-medium py-3 px-4 text-start first:rounded-t-lg last:rounded-b-lg"
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

        {openSetProvince ?
          <ul className="bg-dark-250 rounded-lg w-52">
            {locations[country].map((provinceOption) => (
              <li key={provinceOption}>
                <button
                  className="hover:bg-dark-200 capitalize active:bg-dark-200 w-full h-full font-medium py-3 px-4 text-start first:rounded-t-lg last:rounded-b-lg"
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
          :
          ""
        }


      </div>
    </div>
  );
}