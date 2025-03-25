import { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const CinemaProvider = ({ children }) => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      movie: "PABRIK GULA",
      cinema: "MegaBox Coex Mall",
      date: "28-03-2025",
      time: "19:00",
      seats: ["A1", "A2"]
    }
  ]);

  const addTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, { id: prevTickets.length + 1, ...newTicket }]);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useCinema = () => useContext(TicketContext);
