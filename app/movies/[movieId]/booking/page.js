import { BackBar } from '@/app/components/BackBar'
import { BookSelectCinema } from '@/app/components/BookSelectCinema'
import { BookSelectLocation } from '@/app/components/BookSelectLocation'
import { BottomBarCover } from '@/app/components/BottomBarCover'
import React from 'react'

export default function Page ()  {
  return (
    <section>
      <BackBar/>
      <div className='mt-4'>
         <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-medium text-text-200'>Select Cinema</h2>
            <BookSelectLocation/>
          </div>
          <BookSelectCinema/>
      </div>
      <BottomBarCover/>
    </section>
  )
}
