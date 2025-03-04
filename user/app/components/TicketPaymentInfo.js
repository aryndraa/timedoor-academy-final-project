export const TicketPaymentInfo = ({title, info}) => {
  return (
    <div className="w-full">
      <h3 className="text-xs lg:text-sm text-text-400 mb-1.5 lg:mb-2">{title}</h3>
      <span className="font-semibold lg:text-lg">{info}</span>
    </div>
  )
}
