export const ContactForm = () => {
  return (
    <div className="mb-5 pb-5 lg:mb-10 lg:pb-10 ">
      <h2 className="text-xl lg:text-2xl text-text-100 font-medium mb-4">Contact</h2>
      <div className="grid lg:grid-cols-3 gap-y-4 lg:gap-y-6 items-center lg:max-w-[80%] ">

        <h3 className="text-text-400 text-sm lg:text-base">Email</h3>
        <input
          type="text"
          className="w-full lg:w-[70%] col-span-2 px-4 p-3 bg-dark-200 text-border/40  border border-border/20 rounded-lg focus:outline-none cursor-not-allowed"
          value="user@test.com"
          disabled
        />

        <h3 className="text-text-400 text-sm lg:text-base">Phone Number</h3>
        <input
          type="text"
          className="w-full lg:w-[70%] col-span-2 px-4 p-3 bg-dark-200 text-border/40  border border-border/20 rounded-lg focus:outline-none cursor-not-allowed"
          value="0812345678"
          disabled
        />
      </div>
    </div>
  )
}