export const MovieInfo = ({info, infoDetail}) => {
  return (
    <div className="flex-col flex items-center">
      <h2 className="text-2xl font-semibold">{info}</h2>
      <p className="text-text-400 text-xs">{infoDetail}</p>
    </div>
  )
}
