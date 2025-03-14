import {SectionTitle} from "../components/SectionTitle.jsx";
import {TicketCard} from "../components/cards/TicketCard.jsx";

export function MyTickets() {
  return (
    <>
      <section className="mx-20 mt-12">
        <SectionTitle title="All Tickets" />
        <div className="flex flex-col gap-8 mt-8">
          <TicketCard />
          <TicketCard />
        </div>
      </section>
    </>
  )
}