import { CinemaCard } from "./cards/CinemaCard"

export const BookSelectCinema = () => {
  return (
    <div className='flex flex-col gap-3'>
      <CinemaCard/>
      <CinemaCard/>
      <CinemaCard/>
    </div>
  )
}
