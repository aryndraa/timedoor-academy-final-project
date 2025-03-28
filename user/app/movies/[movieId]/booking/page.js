import { BackBar } from '@/app/components/BackBar'
import { BookSelectCinema } from '@/app/components/BookSelectCinema'
import { BookSelectLocation } from '@/app/components/BookSelectLocation'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import React from 'react'

export default function Page ()  {
  return (
    <section className='lg:mx-16'>
      <BackBar/>
      <div className='mt-4 lg:mt-0'>
         <div className='flex justify-between items-center mb-6 lg:mb-8'>
            <h2 className='text-xl  font-medium text-text-200'>Select Cinema</h2>
            <BookSelectLocation/>
          </div>
          <BookSelectCinema/>
      </div>
      <BottomBarCover/>
    </section>
  )
}
