import { PricingPaymentInfo } from "./PricingPaymentInfo"
import { VoucherLabel } from "./VoucherLabel"

export const PricingPaymentDetail = () => {
  return (
    <div className="flex flex-col gap-4 pb-6 mb-6 border-b border-border">
      <VoucherLabel/>
      <div className="p-4 lg:p-5 bg-dark-200 rounded-lg">
        <h2 className="text-xs lg:text-sm text-text-400 mb-4">Payment Details</h2>
        <div className="flex flex-col gap-3 lg:gap-4 pb-5 mb-5 border-b border-border ">
          <PricingPaymentInfo/>
          <PricingPaymentInfo/>
          <PricingPaymentInfo/>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg lg:text-xl font-semibold">Total</h3>
          <span className="text-lg lg:text-xl font-semibold">Rp. 90.000</span>
        </div>
      </div>
    </div>
  )
}
