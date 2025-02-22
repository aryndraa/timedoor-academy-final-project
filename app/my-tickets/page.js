import { TicketCard } from "../components/cards/TicketCard";
import { SectionTitle } from "../components/SectionTitle";

export default function Page() {
  return (
    <section className="min-h-[60vh] flex flex-col  py-8 lg:mx-16 pb-12 lg:pb-24">
      <SectionTitle title={"My Ticket"}/>
      <div className="grid lg:grid-cols-4 mt-6 gap-8">
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
      </div>
    </section>
  )
}