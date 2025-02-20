
export const DiscoverSelect = ({name, defaultValue, icon = null}) => {
  return (
    <>
      <div className="flex justify-between items-center w-full bg-dark-100 px-4 py-3 rounded-lg">
        <div>
          <p className="text-white/40 text-sm lg:text-base font-medium  capitalize">{name}</p>
          <strong className="text-sm lg:text-lg font-semibold text-white  capitalize">{defaultValue}</strong>
        </div>
        {icon ? (
          <span className="text-2xl bg-white/20 text-white p-2 rounded-full lg:hidden">
            {icon}
          </span>
        ) : ""}
      </div>
      <div className="min-h-screen bg-dark-300/60 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-dark-200 min-w-[40%] p-6 rounded-lg">
          <h2 className="text-xl font-medium pb-4 mb-4 border-border border-b-2">Select {name}</h2>
          <ul>
            <li>
              <button></button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}