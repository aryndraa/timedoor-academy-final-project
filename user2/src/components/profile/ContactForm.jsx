export const ContactForm = () => {
  return (
    <div className="mb-10 pb-10 ">
      <h2 className="text-2xl text-text-100 font-medium mb-4">Contact</h2>
      <div className="grid grid-cols-3 gap-y-6 items-center max-w-[80%] ">

        <h3 className="text-text-400">Email</h3>
        <input
          type="text"
          className="w-[70%] col-span-2 px-4 p-3 bg-dark-200 text-border/40  border border-border/20 rounded-lg focus:outline-none cursor-not-allowed"
          value="aryacoder1102@gmail.com"
          disabled
        />

        <h3 className="text-text-400">Phone Number</h3>
        <input
          type="text"
          className="w-[70%] col-span-2 px-4 p-3 bg-dark-200 text-border/40  border border-border/20 rounded-lg focus:outline-none cursor-not-allowed"
          value="082144915822"
          disabled
        />
      </div>
    </div>
  )
}