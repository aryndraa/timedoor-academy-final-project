import { MovieCard } from "@/app/components/cards/MovieCard";
import { MovieInfo } from "@/app/components/MovieInfo";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function Page ()  {
  return (
    <>
      <section>
         <div className="">
          <img src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg" alt="hero" className="absolute left-0 right-0 top-0 max-h-[30vh]  min-w-full object-cover"/>
          <div className="min-h-[30vh] absolute top-0 left-0 right-0 bg-gradient-to-b from-dark-300/10  to-dark-300"></div>
        </div>
        <div className="relative z-10 ">
          <div>
            <Link href={"/movies"} className="absolute transform -translate-y-16 text-3xl p-2.5 rounded-full bg-dark-100 text-white ">
                <IoArrowBack/>
            </Link>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
                   alt="cover" 
                   className="w-[60%] h-[252px] object-cover rounded-lg mb-4"
              />
              <h1 className="text-xl mb-1 font-semibold">Ruroini Kenshin</h1>
              <h2 className="text-text-400">Action</h2>
            </div>
            <div>
              <MovieInfo/>
            </div>
            
          </div>
      </div>
      </section>
    </>
  )
}
