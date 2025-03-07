import { Poppins } from "next/font/google";
import "@/app/_styles/globals.css";
import { Header } from "./components/Header";
import {BottomBar} from "@/app/components/BottomBar";
import {AuthorizeProvider} from "@/app/_contexts/AuthorizeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400" 
});


export const metadata = {
  title: {
    template: "Aurora Cinema | %s ",
    default: "Aurora Cinema | Home "
  },
  description: "Aurora cinema",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden bg-dark-300 pb-32 lg:pb-12`}
      >
        <AuthorizeProvider>
        <Header/>

          <main className="flex flex-col  mx-5 text-text-200 lg:max-w-7xl lg:mx-auto">
            {children}
          </main>
        <BottomBar/>
        </AuthorizeProvider>

      </body>
    </html>
  );
}
