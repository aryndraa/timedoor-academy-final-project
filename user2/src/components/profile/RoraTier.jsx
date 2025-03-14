import badge from "./../../assets/badge.svg"

export const RoraTier = () => {
  return (
    <div >
      <h3 className="mb-3 text-text-400 text-sm font-medium">MyRora Tier</h3>
      <div className="flex gap-2 items-center w-full">
        <img src={badge} alt="" className="w-[44px]" />
        <div className="w-full">
          <h4 className="text-xl text-text-400 mb-2 font-semibold">Bronze</h4>
          <div className="w-full bg-dark-200 rounded-full h-2.5 ">
            <div
              className="bg-text-200 h-2 rounded-full"
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