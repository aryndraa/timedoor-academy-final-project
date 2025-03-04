import Link from 'next/link'
import React from 'react'

export const BottomBook = () => {
  return (
    <div className='fixed lg:hidden bottom-0 z-[60] p-5 text-center bg-dark-300 flex w-full left-0 right-0'>
      <Link href={"/movies/1/booking"} className='p-3 bg-primary w-full text-dark-300 font-bold text-base rounded-lg '>
        Book Ticket
      </Link>
    </div>
  )
}
