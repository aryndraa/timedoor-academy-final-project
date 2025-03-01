import { BackBar } from '@/app/components/BackBar'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import { ReservationTime } from '@/app/components/ReservationTime'
import { ReservationSeats } from '@/app/components/ReservationSeats'

export default function Page () {
  return (
    <section>
      <BackBar/>
      <div className='relative z-[70] mt-4'>
        <div className='mb-6'>
          <ReservationTime/>
        </div>
        <div>
          <ReservationSeats/>
        </div>
      </div>
      <BottomBarCover/>
    </section>
  )
}
