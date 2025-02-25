"use client"
import {Navigation} from "@/app/components/Navigation";
import { usePathname } from "next/navigation";

export const BottomBar = () => {
  const pathname = usePathname();
  const isMovieDetailPage = /^\/movies\/[^/]+$/.test(pathname); // Untuk /movies/[movieId]
  const isBookingPage = /^\/movies\/[^/]+\/book$/.test(pathname); // Untuk /movies/[movieId]/book

  const shouldHideHeader = isMovieDetailPage || isBookingPage;

  return (
    <>
      {!shouldHideHeader ? (
        <div className="fixed lg:hidden bottom-0 right-0 left-0 px-5 py-4 bg-dark-200  z-50">
          <Navigation/>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}