import {ProfileLayout} from "../layouts/ProfileLayout.jsx";
import {SectionTitle} from "../components/SectionTitle.jsx";
import {ProfileForm} from "../components/profile/ProfileForm.jsx";
import {ContactForm} from "../components/profile/ContactForm.jsx";
import {TicketCard} from "../components/cards/TicketCard.jsx";
import {IoArrowBack} from "react-icons/io5";
import {Link} from "react-router-dom";

export const ShoppingHistory = () => {
  return (
    <>
      <div className="hidden lg:block">
        <ProfileLayout>
          <section className="w-full">
            <SectionTitle title="Shopping History"/>
            <div className="flex flex-col gap-4 lg:gap-8 mt-4 lg:mt-8">
              <TicketCard payment={true}/>
            </div>
          </section>
        </ProfileLayout>
      </div>
      <div>
        <section className="mt-6 mx-3">
          <Link to="/profile" className="flex gap-2 mb-4 items-center text-xl">
            <IoArrowBack className="text-2xl"/> Back
          </Link>
          <SectionTitle title="Shopping History"/>
          <div className="flex flex-col gap-4 lg:gap-8 mt-4 lg:mt-8">
            <TicketCard payment={true}/>
          </div>
        </section>
      </div>
    </>
  )
}