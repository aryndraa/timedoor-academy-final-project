export const TicketCode = ({code}) => {
  return (
    <div className="p-4 lg:p-8 border border-border/20 text-center w-full">
      <h1 className="text-xl lg:text-3xl tracking-widest font-medium">#{code}</h1>
    </div>
  )
}