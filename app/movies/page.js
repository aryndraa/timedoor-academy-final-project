import { MovieCard } from "../components/cards/MovieCard";

export default function Page () {
  return (
    <>
     <div className="grid grid-cols-4 gap-8">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
     </div>
    </>
  )
}