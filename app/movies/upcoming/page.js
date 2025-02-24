import { MovieCard } from "@/app/components/cards/MovieCard";

export default function Page ()  {
  return (
    <>
         <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 gap-y-8 lg:gap-8">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
          </div>
    </>
  )
}
