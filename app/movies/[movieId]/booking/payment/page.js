import { BackBar } from '@/app/components/BackBar'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import { PricingPaymentDetail } from '@/app/components/PricingPaymentDetail'
import { TicketPaymentButton } from '@/app/components/TicketPaymentButton'
import { TicketPaymentDetail } from '@/app/components/TicketPaymentDetail'

export default function page() {
  return (
    <section>
      <BackBar/>

      <div className='relative z-[70] mt-4 lg:mt-0'>
        <h1 className='text-xl  mb-6 font-medium text-text-200'>Booking</h1>
       <TicketPaymentDetail/>
       <PricingPaymentDetail/>
       <TicketPaymentButton/>
      </div>

      <BottomBarCover/>
    </section>
  )
}
