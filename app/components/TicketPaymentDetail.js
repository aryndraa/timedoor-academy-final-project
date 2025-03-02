import { TicketPaymentInfo } from "./TicketPaymentInfo"

export const TicketPaymentDetail = () => {
  return (
    <div>
      <h2 className="pb-6 mb-6 text-2xl font-medium border-b border-border">Ruroini Kenshin</h2>
      <div className="grid grid-cols-2 gap-4 gap-y-8 pb-6 mb-6 border-b border-border">
        <TicketPaymentInfo/>
        <TicketPaymentInfo/>
        <TicketPaymentInfo/>
        <TicketPaymentInfo/>
        <TicketPaymentInfo/>
        <TicketPaymentInfo/>
      </div>
    </div>
  )
}
