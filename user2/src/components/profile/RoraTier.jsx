import badge from "./../../assets/badge.svg"

export const RoraTier = () => {
  return (
    <div >
      <h3 className="mb-2 lg:mb-3 text-text-400/60 lg:text-text-400 text-xs lg:text-sm font-medium">MyRora Tier</h3>
      <div className="flex gap-2 items-center w-full">
        <img src={badge} alt="" className="w-[36px] lg:w-[44px]" />
        <div className="w-full">
          <h4 className="text-lg lg:text-xl text-text-400 mb-2 font-medium lg:font-semibold">Bronze</h4>
          <div className="w-full bg-dark-200 rounded-full h-2 lg:h-2.5 ">
            <div
              className="bg-text-200 h-1.5 lg:h-2 rounded-full"
              style={{
                width: "40%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}