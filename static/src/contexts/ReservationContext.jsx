import { createContext, useState, useContext, useEffect } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [movie, setMovie] = useState("");
  const [cinema, setCinema] = useState("");
  const [studio, setStudio] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState([]);

  // 🔹 Gunakan useEffect untuk memantau setiap perubahan
  useEffect(() => {
    console.log("🎬 Movie:", movie);
  }, [movie]);

  useEffect(() => {
    console.log("🏢 Cinema:", cinema);
  }, [cinema]);

  useEffect(() => {
    console.log("🎭 Studio:", studio);
  }, [studio]);

  useEffect(() => {
    console.log("📅 Date:", date);
  }, [date]);

  useEffect(() => {
    console.log("⏰ Time:", time);
  }, [time]);

  useEffect(() => {
    console.log("💺 Seats:", seats);
  }, [seats]);

  return (
    <ReservationContext.Provider
      value={{
        movie,
        setMovie,
        cinema,
        setCinema,
        studio,
        setStudio,
        date,
        setDate,
        time,
        setTime,
        seats,
        setSeats,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => useContext(ReservationContext);
