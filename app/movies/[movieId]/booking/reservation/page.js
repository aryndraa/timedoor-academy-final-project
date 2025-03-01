import { BackBar } from '@/app/components/BackBar'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import { ReservationTime } from '@/app/components/ReservationTime'

export default function Page () {
  return (
    <section>
      <BackBar/>
      <div className='relative z-50 mt-4'>
        <ReservationTime/>
      </div>
      <BottomBarCover/>
    </section>
  )
}
