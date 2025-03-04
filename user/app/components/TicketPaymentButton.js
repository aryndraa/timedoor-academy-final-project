import { ButtonPaymentMethod } from "./ButtonPaymentMethod"

export const TicketPaymentButton = () => {
  return (
    <div className="flex flex-col gap-4">
      <ButtonPaymentMethod/>
      <button className="w-full bg-primary p-4 text-dark-300 font-bold text-lg rounded-lg">
        Booking Ticket
      </button>
    </div>
  )
}
