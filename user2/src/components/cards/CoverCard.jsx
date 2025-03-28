export const CoverCard = () => {
  return (
    <div>
      <div className="relative mb-3 ">
        <img
          src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
          className="rounded-lg min-w-[162px] h-[225px] lg:h-[300px] lg:w-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-dark-300/20 via-dark-300/0 to-dark-300/20"></div>
      </div>
    </div>
  )
}
