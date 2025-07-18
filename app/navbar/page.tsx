import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full bg-accent-foreground h-17 flex items-center text-white px-3 shadow-2xl bg-linear-240 justify-between'>
      <span className='md:text-3xl font-bold sm:text-[12px]'> <Link href='/'>CodeSnippets 🖥⏰</Link> </span>
      <div className='userprofile flex items-center gap-2'>
        <p className='font-bold md:text-3xl'>Hello, John</p>
        <div className='h-12 w-12 rounded-3xl bg-yellow-100'></div>
      </div>
    </nav>
  )
}
