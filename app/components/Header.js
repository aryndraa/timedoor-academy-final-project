"use client"

import { GuestLink } from "./GuestLink";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const isMovieDetailPage = /^\/movies\/[^/]+$/.test(pathname); // Untuk /movies/[movieId]
  const isBookingPage = /^\/movies\/[^/]+\/book$/.test(pathname); // Untuk /movies/[movieId]/book

  const shouldHideHeader = isMovieDetailPage || isBookingPage;

  return (
    <>
      {!shouldHideHeader ? (
        <header className="flex flex-col lg:bg-dark-200 lg:mx-16 lg:my-5 rounded-full">
          <div className="flex justify-between items-center py-4 px-3 lg:px-12">
            <Logo />
            <div className="hidden lg:flex">
              <Navigation />
            </div>
            <GuestLink />
          </div>
        </header>
      ) : (
        <header></header>
      )}
    </>
  );
};
