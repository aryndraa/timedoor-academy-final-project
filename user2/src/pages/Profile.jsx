import {ProfileLayout} from "../layouts/ProfileLayout.jsx";
import {SectionTitle} from "../components/SectionTitle.jsx";
import {FaUser} from "react-icons/fa";
import {ProfileForm} from "../components/profile/ProfileForm.jsx";
import {ContactForm} from "../components/profile/ContactForm.jsx";

export function Profile() {
  return (
    <>
      <ProfileLayout>
        <section className="w-full">
          <SectionTitle title="Account Setting"/>
          <div className="mt-8 px-8 py-6 bg-dark-250 w-full ">
            <ProfileForm/>
            <ContactForm />
            <button className="px-8 py-3 text-dark-300 font-semibold rounded-lg bg-primary/20 cursor-not-allowed">Save Changes</button>
          </div>
        </section>
      </ProfileLayout>
    </>
  )
}