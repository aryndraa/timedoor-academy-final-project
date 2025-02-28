import { BackBar } from '@/app/components/BackBar'
import { BookSelectLocation } from '@/app/components/BookSelectLocation'
import React from 'react'

export default function Page ()  {
  return (
    <section>
      <BackBar/>
      <div className="mt-4 mb-6 bg-dark-100 p-3 rounded-xl flex gap-2 items-center">
        <img 
          src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
          className='w-14 h-14 object-cover rounded-full'
        />
        <div>
          <span className='text-sm'>Book Movie</span>
          <h3 className='text-white font-semibold'>Ruroinin Kenshin</h3>
        </div>
      </div>
      <div>
         <div className='flex justify-between items-center'>
            <h2 className='text-xl font-medium text-text-200'>Select Cinema</h2>
            <BookSelectLocation/>
          </div>
      </div>
    </section>
  )
}
