import { CinemaTypeSelect } from "./CinemaTypeSelect"
import { SeatsSelect } from "./SeatsSelect"

export const ReservationSeats = () => {
  return (
    <div className="p-4 py-6 bg-dark-200 rounded-lg">
      <div className="mb-6 ">
        <CinemaTypeSelect/>
      </div>
      <div>
        <SeatsSelect/>
      </div>
    </div>
  )
}
