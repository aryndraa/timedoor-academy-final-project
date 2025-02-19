
export const DiscoverSelect = ({name, defaultValue, icon = null}) => {
  return (
    <div className="flex justify-between items-center w-full bg-dark-100 px-4 py-3 rounded-lg">
      <div>
        <p className="text-white/40 text-sm lg:text-base font-medium  capitalize">{name}</p>
        <strong className="text-sm lg:text-lg font-semibold  capitalize">{defaultValue}</strong>
      </div>
      {icon ? (
        <span className="text-2xl bg-white/20 text-white p-2 rounded-full lg:hidden">
          {icon}
        </span>
      ) : ""}
    </div>
  )
}