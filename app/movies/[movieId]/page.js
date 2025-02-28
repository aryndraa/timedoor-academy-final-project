import { BottomBook } from "@/app/components/BottomBook";
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
        <div className=" ">
          <div>
            <Link href={"/movies"} className="absolute left-0 right-0 top-0  text-3xl p-4 py-8  flex bg-gradient-to-b from-dark-300 to-dark-300/0 text-white  w-full ">
                <IoArrowBack/>
            </Link>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col mt-2">
              <div className="flex flex-col items-center mb-4">
                <img src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
                     alt="cover" 
                     className="w-[60%] h-[260px] object-cover rounded-lg mb-4"
                />
                <h1 className="text-xl mb-1 font-semibold">Ruroini Kenshin</h1>
                <h2 className="text-text-400">Action</h2>
              </div>
              <div>
              </div>
              <div className="grid grid-cols-3 border-y py-3 relative  border-border/20">
                <MovieInfo info={"SU"} infoDetail={"Semua Usia"}/>
                <MovieInfo info={"140"} infoDetail={"Minute"}/>
                <MovieInfo info={"ID"} infoDetail={"Indonesia"}/>
              </div>
            </div>
          </div>
        </div>

        <BottomBook/>
      </section>
    </>
  )
}
