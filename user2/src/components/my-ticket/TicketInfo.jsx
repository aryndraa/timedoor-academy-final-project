export const TicketInfo = ({name, info}) => {
  return (
    <div className="flex gap-2 items-center text-text-200">
      <h4>{name}</h4>
      <p>{info}</p>
    </div>
  )
}