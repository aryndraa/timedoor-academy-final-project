export const VoucherLabel = () => {
  return (
    <div className="bg-dark-200 rounded-lg py-3 pb-4 px-5 ">
      <label className="text-xs text-text-400">Aurora Voucher</label>
      <input 
        placeholder="Gunakan Voucher" 
        type="text" 
        className="bg-transparent font-semibold placeholder:text-text-200 placeholder:text-lg mt-1 "
      />
    </div>
  )
}
