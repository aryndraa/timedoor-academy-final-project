export const InputField = ({ label, type, name, register, error }) => {
  return (
    <div>
      <label className="block font-medium mb-2 text-text-400 text-sm">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="w-full text-text-400 font-medium mb-3 p-4 rounded border border-border/40 bg-transparent focus:outline-none"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}