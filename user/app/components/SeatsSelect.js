export const SeatsSelect = () => {
  const totalSeats = 30;
  const seatsPerRow = 6;

  return (
    <div>
      <div className="flex p-2 lg:p-4 mb-4 bg-dark-100 justify-center rounded-full font-semibold text-text-400">
        Layar
      </div>
      <div className="grid grid-cols-6 gap-2 mb-6 lg:mb-12">
        {[...Array(totalSeats)].map((_, i) => {
          const row = String.fromCharCode(65 + Math.floor(i / seatsPerRow));
          const seatNumber = (i % seatsPerRow) + 1;
          return (
            <span key={`${row}${seatNumber}`} className="bg-dark-100  flex justify-center py-2 lg:py-3 text-sm font-semibold  rounded-full">
              {row}{seatNumber}
            </span>
          );
        })}
      </div>
      <div className="flex justify-between lg:justify-start gap-4">
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-primary block rounded-lg"></span>
          Chosen
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-dark-300 block rounded-lg"></span>
          booked
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-dark-100 block rounded-lg"></span>
          Available
        </div>
      </div>
    </div>
  );
};
