export const VoucherLabel = () => {
  return (
    <div className="bg-dark-200 rounded-lg py-3 p-4 lg:p-5 flex flex-col gap-2 ">
      <label className="text-xs lg:text-sm text-text-400">Aurora Voucher</label>
      <input
        placeholder="Gunakan Voucher"
        type="text"
        value={"VOUCHERDISKON"}
        className="bg-transparent font-semibold placeholder:text-text-200 placeholder:text-lg   focus:outline-none"
      />
    </div>
  )
}
