import { BackBar } from '@/app/components/BackBar'
import { BottomBarCover } from '@/app/components/BottomBarCover'

export default function page() {
  return (
    <section>
      <BackBar/>

      <div className='relative z-[70] mt-4 lg:mt-0'>
        <h1 className='text-xl  font-medium text-text-200'>Booking</h1>
        <div></div>
      </div>

      <BottomBarCover/>
    </section>
  )
}
