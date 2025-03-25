import { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      movie: "PABRIK GULA",
      cinema: "MegaBox Coex Mall",
      date: "28-03-2025",
      time: "19:00",
      studio: "reguler",
      seats: ["A1", "A2"],
      code: "454545"
    },
  ]);

  const generateTicketCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); 
  };

  const addTicket = (newTicket) => {
    setTickets((prevTickets) => [
      ...prevTickets,
      { id: prevTickets.length + 1, ...newTicket, code: generateTicketCode() }
    ]);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);
