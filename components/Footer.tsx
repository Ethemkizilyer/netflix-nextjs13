import { GiftTopIcon } from '@heroicons/react/24/solid';
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex items-center h-12 bg-slate-400 justify-center">
      <Link className='text-red-700 font-bold' href="https://github.com/Ethemkizilyer">
       {new Date().getFullYear() } / Ethem KZLYR 💻
      </Link>
    </div>
  );
}

export default Footer