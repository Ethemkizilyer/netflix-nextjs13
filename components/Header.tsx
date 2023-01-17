"use client"

import Image from "next/image"
import Link from "next/link"
import { MagnifyingGlassIcon , BellIcon} from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import logo from "../public/logo.png"
import avatar from "../public/avatar.png";
const Header = () => {

  const [isScrolled,setIsScrolled]= useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 0){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll",handleScroll)

    return ()=>{
      window.removeEventListener("scroll",handleScroll
      )
    }

  },[])
  
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <Link href="/">
        <Image
          src={logo}
          alt=""
          width={100}
          height={100}
          className="object-contain cursor-pointer"
        />
      </Link>
      <ul className="hidden space-x-4 md:flex">
        <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
          Home
        </li>
        <li className="headerLink">Tv Shows</li>
        <li className="headerLink">Films</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List</li>
      </ul>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/">
          <img
            src={"https://rb.gy/g1pwyx"}
            alt="icon"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header