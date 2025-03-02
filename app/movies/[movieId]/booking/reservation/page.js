import { BackBar } from '@/app/components/BackBar'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import { ReservationTime } from '@/app/components/ReservationTime'
import { ReservationSeats } from '@/app/components/ReservationSeats'
import Link from 'next/link'

export default function Page () {
  return (
    <section className='lg:mx-16 lg:max-w-2xl '>
      <BackBar/>
      <div className='relative z-[70] mt-4 lg:mt-0'>
        <div className='mb-6'>
          <ReservationTime/>
        </div>
        <div className='mb-6'>
          <ReservationSeats/>
        </div>
        <Link href={"/movies/1/booking/payment"} className='bg-primary flex justify-center w-full p-4 rounded-lg text-dark-300 font-bold text-lg '>Booking</Link>
      </div>
      <BottomBarCover/>
    </section>
  )
}
