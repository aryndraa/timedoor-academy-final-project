import { BackBar } from '@/app/components/BackBar'
import React from 'react'

export default function Page ()  {
  return (
    <section>
      <BackBar/>
      <div className="mt-4 bg-dark-100 p-3 rounded-lg flex gap-2 items-center">
        <img 
          src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
          className='w-14 h-14 object-cover rounded-full'
        />
        <div>
          <span className='text-sm'>Book Movie</span>
          <h3 className='text-white font-semibold'>Ruroinin Kenshin</h3>
        </div>
      </div>
    </section>
  )
}
