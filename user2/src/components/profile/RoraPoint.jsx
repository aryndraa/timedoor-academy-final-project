import point from "../../assets/poin.svg";

export const RoraPoint = () => {
  return (
    <div>
      <h3 className="mb-2 lg:mb-3 text-text-400/60 lg:text-text-400 text-xs lg:text-sm font-medium">MyRora Points</h3>
      <div className="flex gap-2 items-center w-full">
        <img src={point} alt="" className="w-[36px] lg:w-[44px]"/>
        <div className="w-full">
          <h4 className="text-lg lg:text-xl text-text-400 lg:mb-0.5 font-semibold">45.000</h4>
          <p className="text-text-400 text-xs">12x Belanja</p>
        </div>
      </div>
    </div>
  )
}