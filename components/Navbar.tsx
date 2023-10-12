import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center'>
            <Image
            src='/logo.svg'
            alt='CarHub logo'
            width={118}
            height={18}
             />
        </nav>

    </header>
  )
}

export default Navbar