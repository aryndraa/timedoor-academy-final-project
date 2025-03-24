import { useState, useEffect } from "react";
import { useReservation } from "../../contexts/ReservationContext";

export const SeatsSelect = () => {
  const totalSeats = 30;
  const seatsPerRow = 6;

  // State untuk kursi yang sudah dibooking
  const [bookedSeats, setBookedSeats] = useState([]);
  const {seats, setSeats} = useReservation();

  // Fungsi untuk mengacak kursi yang dibooking
  useEffect(() => {
    const generateRandomBookedSeats = () => {
      let allSeats = [];
      for (let i = 0; i < totalSeats; i++) {
        const row = String.fromCharCode(65 + Math.floor(i / seatsPerRow));
        const seatNumber = (i % seatsPerRow) + 1;
        allSeats.push(`${row}${seatNumber}`);
      }

      // Acak kursi dan ambil 20 kursi untuk dibooking
      const shuffledSeats = allSeats.sort(() => 0.5 - Math.random());
      setBookedSeats(shuffledSeats.slice(0, 10));
    };

    generateRandomBookedSeats();
  }, []);

  // Fungsi untuk memilih kursi
  const toggleSeatSelection = (seatId) => {
    if (bookedSeats.includes(seatId)) return; // Tidak bisa memilih kursi yang sudah dibooking

    setSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((seat) => seat !== seatId) // Hapus jika sudah dipilih
        : [...prevSelected, seatId] // Tambahkan jika belum dipilih
    );
  };

  return (
    <div>
      {/* Indikasi Layar */}
      <div className="flex p-2 lg:p-4 mb-4 bg-dark-100 justify-center rounded-full font-semibold text-text-400">
        Layar
      </div>

      {/* Grid Kursi */}
      <div className="grid grid-cols-6 gap-2 mb-6 lg:mb-12">
        {[...Array(totalSeats)].map((_, i) => {
          const row = String.fromCharCode(65 + Math.floor(i / seatsPerRow));
          const seatNumber = (i % seatsPerRow) + 1;
          const seatId = `${row}${seatNumber}`;

          // Menentukan warna kursi berdasarkan statusnya
          let seatStyle = "bg-dark-100 text-white cursor-pointer"; // Default: tersedia
          if (bookedSeats.includes(seatId)) {
            seatStyle = "bg-dark-300 text-gray-500 cursor-not-allowed"; // Sudah dibooking
          } else if (seats.includes(seatId)) {
            seatStyle = "bg-primary text-dark-200"; // Dipilih
          }

          return (
            <span
              key={seatId}
              className={`flex justify-center py-2 lg:py-3 text-sm font-semibold rounded-full transition ${seatStyle}`}
              onClick={() => toggleSeatSelection(seatId)}
            >
              {seatId}
            </span>
          );
        })}
      </div>

      {/* Keterangan Warna */}
      <div className="flex justify-between lg:justify-start gap-4 mb-4">
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-primary block rounded-lg"></span>
          Chosen
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-dark-300 block rounded-lg"></span>
          Booked
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="w-4 h-4 bg-dark-100 block rounded-lg"></span>
          Available
        </div>
      </div>

    </div>
  );
};
