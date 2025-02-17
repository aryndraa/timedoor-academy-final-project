import { Poppins } from "next/font/google";
import "@/app/_styles/globals.css";
import { Header } from "./components/Header";

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
        className={`${poppins.className} antialiased overflow-hidden bg-dark-300 `}
      >
        <Header/>

        <main className="flex flex-col  mx-5 text-text-200">
          {children}
        </main>
      </body>
    </html>
  );
}
