import { FaMapLocationDot, FaLocationDot, FaClock   } from "react-icons/fa6";

export const CinemaCard = ({picture, name, address, country, province, openingTime, closingTime, studios = []}) => {
  return (
    <div className="flex gap-4 lg:gap-6 p-4 lg:p-6 border border-border/20 bg-dark-250 hover:bg-dark-200 transition ease-in-out ">
      <img
        src={picture ?? "https://fifthperson.com/wp-content/uploads/2018/05/lippo-kuta.jpg"}
        alt=""
        className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] object-cover "
      />
      <div className="w-full   ">
        <h2 className="lg:text-xl font-medium pb-3 mb-3 lg:pb-4  lg:mb-4 border-b">{name ?? "Lippo Mall Bali Kuta"}</h2>
         <div className="flex flex-col gap-6 lg:gap-8   justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex text-xs font-medium lg:font-normal lg:text-base items-center gap-2 text-text-400" >
              <FaMapLocationDot/>
              {address ?? "  Jln. Ngawi Selatan No. 12"}

            </p>
            <p className="flex text-xs capitalize font-medium lg:font-normal lg:text-base items-center gap-2 text-text-400" >
              <FaLocationDot/>
              {country ?? "Indonesia"} / {province ?? "Bali"}
            </p>
            <p className="flex text-xs font-medium lg:font-normal lg:text-base items-center gap-2 text-text-400 " >
              <FaClock/>
              {openingTime ?? "09:00"} - {closingTime ?? "20:00"}
            </p>
          </div>
          <div className="self-end flex text-sm lg:text-base gap-3">
            {
              studios.length > 0 ?
                studios.map((studio, index) => (
                  <span className="uppercase" key={index}>{studio.name}</span>
                ))
                :
                (
                  <>
                    <span>REGULER</span>
                    <span>IMAX</span>
                    <span>VIP</span>
                  </>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}