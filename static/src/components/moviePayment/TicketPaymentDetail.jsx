import { TicketPaymentInfo } from "./TicketPaymentInfo"

export const TicketPaymentDetail = ({cinema, studio, date, time, seats = [], movie}) => {
  return (
    <div className="pb-6 lg:pb-8 mb-6 lg:mb-8 border-b border-border">
      <h2 className="pb-6 lg:pb-8 mb-6 lg:mb-8 text-2xl lg:text-3xl font-medium border-b border-border">{movie}</h2>
      <div className="grid grid-cols-2 gap-4 gap-y-6 ">
        <TicketPaymentInfo title={"Cinema"} info={cinema}/>
        <TicketPaymentInfo title={"Studio"} info={studio}/>
        <TicketPaymentInfo title={"Date"} info={date}/>
        <TicketPaymentInfo title={"Time"} info={time}/>
        <TicketPaymentInfo title={"Total Seats"} info={`${seats.length} Seats`}/>
        <TicketPaymentInfo title={"Seats"} info={seats.join(", ")} />
      </div>
    </div>
  )
}
