import {ProfileLayout} from "../layouts/ProfileLayout.jsx";
import {SectionTitle} from "../components/SectionTitle.jsx";
import {ProfileForm} from "../components/profile/ProfileForm.jsx";
import {ContactForm} from "../components/profile/ContactForm.jsx";
import {TicketCard} from "../components/cards/TicketCard.jsx";

export const ShoppingHistory = () => {
  return (
    <>
      <ProfileLayout>
        <section className="w-full">
          <SectionTitle title="Shopping History"/>
          <div className="flex flex-col gap-4 lg:gap-8 mt-4 lg:mt-8">
            <TicketCard payment={true}/>
          </div>
        </section>
      </ProfileLayout></>
  )
}