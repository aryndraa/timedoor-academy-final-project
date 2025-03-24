export const HoursSelect = ({ hour, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer 
      ${isSelected ? "bg-primary text-dark-200" : "bg-dark-100 text-white"}`}
    >
      {hour}
    </button>
  );
};
