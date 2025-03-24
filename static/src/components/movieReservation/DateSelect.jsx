export const DateSelect = ({ date, isSelected }) => {
  return (
    <div
      className={`p-3 px-8 rounded-2xl flex flex-col items-center cursor-pointer transition 
      ${isSelected ? "bg-primary text-dark-200" : "bg-dark-100 text-white"}`}
    >
      <span className="font-semibold text-sm lg:text-base">{date.month}</span>
      <h3 className="text-3xl font-semibold leading-[1.2]">{date.day}</h3>
    </div>
  );
};
