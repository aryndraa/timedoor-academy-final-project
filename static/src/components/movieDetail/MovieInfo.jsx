export const MovieInfo = ({info, infoDetail}) => {
  return (
    <div className="flex-col lg:flex-row lg:gap-4 flex items-center">
      <h2 className="text-xl font-semibold capitalize">{info}</h2>
      <p className="text-text-400 text-xs lg:text-base capitalize">{infoDetail}</p>
    </div>
  )
}
