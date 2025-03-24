export const CasterCard = ({picture, name}) => {
  return (
    <div>
      <img
        src={picture}
        className="w-24 lg:w-28 object-cover rounded-lg h-24 lg:h-28 mb-3"
      />
      <h3 className="font-medium text-text-400 text-sm lg:text-lg">{name}</h3>
    </div>
  )
}
