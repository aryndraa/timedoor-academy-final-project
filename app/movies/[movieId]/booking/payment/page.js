import { BackBar } from '@/app/components/BackBar'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import { PricingPaymentDetail } from '@/app/components/PricingPaymentDetail'
import { TicketPaymentButton } from '@/app/components/TicketPaymentButton'
import { TicketPaymentDetail } from '@/app/components/TicketPaymentDetail'

export default function page() {
  return (
    <section className='lg:mx-16  '>
      <BackBar/>

      <div className='relative z-[70] mt-4 lg:mt-0 lg:flex w-full gap-20'>
        <div className='flex-1'>
          <h1 className='text-xl lg:text-2xl  mb-6 font-medium text-text-200'>Booking</h1>
          <TicketPaymentDetail/>
        </div>
        <div className='flex-1'>
          <PricingPaymentDetail/>
          <TicketPaymentButton/>
        </div>
      </div>

      <BottomBarCover/>
    </section>
  )
}
