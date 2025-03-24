export const PricingPaymentInfo = ({name, info}) => {
  return (
    <div className="flex justify-between" itemScope>
      <h3 className="text-sm lg:text-base ">{name}</h3>
      <span  className="text-sm lg:text-base">Rp. {info}</span>
    </div>
  )
}
