import Link from 'next/link'
import React from 'react'

export const JoinBanner = () => {
  return (
    <div 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1623124389875-26ddebf2bf5e?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
       }}
       className='min-h-[65vh] lg:min-h-[80vh] rounded-2xl relative bg-cover flex flex-col justify-end'
    >
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-black/80 to-black rounded-2xl '></div>
      <div className='flex flex-col lg:flex-row lg:items-end gap-6 relative z-10 m-6 lg:m-16 justify-between '>
        <div className='text-white '>
          <h1 className='text-2xl lg:text-6xl font-semibold mb-2 lg:mb-4'>Join Membership</h1>
          <p className='text-sm text-white/60 lg:max-w-xl font-extralight  '>Dapatkan banyak voucher menarik untuk menikmati berbagai film favoritmu di bioskop pilihan, mulai dari diskon tiket, hingga cashback spesial untuk setiap pembelian tiket online! 🍿🎬 </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 '>
          <Link href={"/"} className='w-full lg:text-lg px-4 text-center lg:px-6 py-3 lg:py-3 border rounded-lg border-white text-white'>Log In</Link>
          <Link href={"/"} className='w-full lg:text-lg px-4 text-center lg:px-6 py-3 lg:py-3 border rounded-lg border-primary text-primary'>Register</Link>
        </div>
      </div>
    </div>
  )
}
