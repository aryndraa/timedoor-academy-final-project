export const SeatsBooked = ({seats}) => {
  const totalSeats = 60;
  const seatsPerRow = 6;

  const bookedSeats = seats.map(seat => {
    return {
      rows: seat.charAt(0),  
      columns: parseInt(seat.slice(1)) 
    };
  });

  return (
    <div className="p-6 border border-border/20">
      <div className="flex p-2 lg:p-4 mb-4 bg-dark-100 justify-center rounded-full font-semibold text-text-400">
        Layar
      </div>
      <div className="grid grid-cols-6 gap-2 mb-6 lg:mb-12">
        {[...Array(totalSeats)].map((_, i) => {
          const row = String.fromCharCode(65 + Math.floor(i / seatsPerRow));
          const seatNumber = (i % seatsPerRow) + 1;
          const isBooked = bookedSeats.some(
            (seat) => seat.rows === row && seat.columns === seatNumber
          );

          return (
            <span
              key={`${row}${seatNumber}`}
              className={`${
                isBooked ? "bg-primary text-white" : "bg-dark-100"
              } flex justify-center py-2 lg:py-3 text-sm font-semibold rounded-full`}
            >
              {row}{seatNumber}
            </span>
          );
        })}
      </div>
      <div className="flex justify-between lg:justify-start gap-4">
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-primary block rounded-lg"></span>
          Booked
        </div>
      </div>
    </div>
  );
};
