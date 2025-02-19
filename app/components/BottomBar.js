import {Navigation} from "@/app/components/Navigation";

export const BottomBar = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 px-3 py-4 bg-dark-200 ">
      <Navigation/>
    </div>
  )
}