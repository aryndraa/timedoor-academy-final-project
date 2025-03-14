import {Header} from "../components/templates/Header.jsx";
import {BottomBar} from "../components/templates/navigation/BottomBar.jsx";

export const DefaultLayout = ({children}) => {
  return (
        <div
          className={`antialiased overflow-x-hidden bg-dark-300 pb-32 lg:pb-12`}
        >
          <Header/>

          <main className="flex flex-col  text-text-200">
            {children}
          </main>

          <BottomBar/>
        </div>
  )
}