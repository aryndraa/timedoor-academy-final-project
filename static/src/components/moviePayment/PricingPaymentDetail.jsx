import { useReservation } from "../../contexts/ReservationContext"
import { PricingPaymentInfo } from "./PricingPaymentInfo"
import { VoucherLabel } from "./VoucherLabel"

export const PricingPaymentDetail = () => {
  const { seats } = useReservation();
  const ticketPrice = 45000; // Harga per tiket
  const totalPrice = seats.length * ticketPrice; // Hitung total harga

  return (
    <div className="flex flex-col gap-4 pb-6 mb-6 border-b border-border">
      <VoucherLabel />
      <div className="p-4 lg:p-5 bg-dark-200 rounded-lg">
        <h2 className="text-xs lg:text-sm text-text-400 mb-4">Payment Details</h2>
        <div className="flex flex-col gap-3 lg:gap-4 pb-5 mb-5 border-b border-border ">
          <PricingPaymentInfo name={`1 Ticket`} info={` ${ticketPrice.toLocaleString()}`} />
          <PricingPaymentInfo name={`${seats.length} Ticket(s)`} info={` ${totalPrice.toLocaleString()}`} />
          <PricingPaymentInfo name={`Discount`} info="20.000" />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg lg:text-xl font-semibold">Total</h3>
          <span className="text-lg lg:text-xl font-semibold">Rp. {(totalPrice - 20000).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
