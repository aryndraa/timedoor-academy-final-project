export const TicketPaymentInfo = ({title, info}) => {
  return (
    <div className="w-full">
      <h3 className="text-xs text-text-400 mb-1.5">{title}</h3>
      <span className="font-semibold">{info}</span>
    </div>
  )
}
