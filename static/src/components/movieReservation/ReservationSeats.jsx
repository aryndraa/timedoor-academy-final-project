import { CinemaTypeSelect } from "./CinemaTypeSelect"
import { SeatsSelect } from "./SeatsSelect"

export const ReservationSeats = ({studios}) => {
  return (
    <div className="p-4 py-6 lg:p-8 bg-dark-200 rounded-lg">
      <div className="mb-6 ">
        <CinemaTypeSelect studios={studios}/>
      </div>
      <div>
        <SeatsSelect/>
      </div>
    </div>
  )
}
