import { TicketPaymentInfo } from "./TicketPaymentInfo"

export const TicketPaymentDetail = () => {
  return (
    <div>
      <h2 className="pb-6 mb-6 text-2xl font-medium border-b border-border">Ruroini Kenshin</h2>
      <div className="grid grid-cols-2 gap-4 gap-y-6 pb-6 mb-6 border-b border-border">
        <TicketPaymentInfo title={"Cinema"} info={"Lippo Mall Kuta"}/>
        <TicketPaymentInfo title={"Type Cinema"} info={"Reguler"}/>
        <TicketPaymentInfo title={"Date"} info={"12 / 12 / 2012"}/>
        <TicketPaymentInfo title={"Time"} info={"14.00"}/>
        <TicketPaymentInfo title={"Total Seats"} info={"2 Seats"}/>
        <TicketPaymentInfo title={"Seats"} info={"A8, A9"}/>
      </div>
    </div>
  )
}
