import {SectionTitle} from "../../components/SectionTitle.jsx";
import {ProfileForm} from "../../components/profile/ProfileForm.jsx";
import {ContactForm} from "../../components/profile/ContactForm.jsx";
import {Link} from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export function EditProfile() {
  return (
    <>
      <section className="mx-3 mt-6">
        <Link to="/profile/Profile" className="flex gap-2 mb-4 items-center text-xl">
          <IoArrowBack className="text-2xl"/> Back
        </Link>
        <div className=" px-4 lg:px-8 py-6 bg-dark-250 w-full rounded-lg  ">
          <ProfileForm/>
          <ContactForm/>
          <button className="px-8 py-3 text-dark-300  w-full font-semibold rounded-lg bg-primary/20 cursor-not-allowed">Save
            Changes
          </button>
        </div>
      </section>
    </>
  )
}