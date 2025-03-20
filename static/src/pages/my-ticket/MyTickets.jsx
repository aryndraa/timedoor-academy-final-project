import {SectionTitle} from "../../components/SectionTitle.jsx";
import {TicketCard} from "../../components/cards/TicketCard.jsx";

export function MyTickets() {
  return (
    <>
      <section className="mx-3 lg:mx-20 mt-6 lg:mt-12 ">
        <SectionTitle title="All Tickets" />
        <div className="flex flex-col gap-4 lg:gap-8 mt-4 lg:mt-8">
          <TicketCard />
          <TicketCard />
        </div>
      </section>
    </>
  )
}