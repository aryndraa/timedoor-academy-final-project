import {BackBar} from "../../components/movieBooking/BackBar.jsx";
import {BottomBarCover} from "../../components/movieBooking/BottomBarCover.jsx";
import {TicketPaymentButton} from "../../components/moviePayment/TicketPaymentButton.jsx";
import {TicketPaymentDetail} from "../../components/moviePayment/TicketPaymentDetail.jsx";
import {PricingPaymentDetail} from "../../components/moviePayment/PricingPaymentDetail.jsx";

export function MoviePayment() {
  return (
    <>
      <section className='mx-3 lg:mx-20  '>
        <BackBar/>

        <div className='relative z-[70] mt-4 lg:mt-12 lg:flex w-full gap-20'>
          <div className='flex-1'>
            <h1 className='text-xl   mb-6 font-medium text-text-200'>Booking</h1>
            <TicketPaymentDetail/>
          </div>
          <div className='flex-1'>
            <PricingPaymentDetail/>
            <TicketPaymentButton/>
          </div>
        </div>

        <BottomBarCover/>
      </section>
    </>
  )
}