"use client"

import Image from "next/image"
import Link from "next/link"
import { MagnifyingGlassIcon , BellIcon} from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import logo from "../public/logo.png"
import avatar from "../public/avatar.png";
import { inputMovie } from "@/utils/fetchMovies"
const Header = () => {

  const [isScrolled,setIsScrolled]= useState(false)
  const [asd,setAsd]= useState<string>("")

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

  const bakar=()=>{
    console.log(asd)
    inputMovie(asd)
  }

  useEffect(()=>{
    inputMovie(asd);
  },[asd])
  
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
        
        <div className="relative text-black bg-slate-200">
          
          <MagnifyingGlassIcon className="absolute text-red h-5 w-6 right-0" onClick={bakar}/><input type="text" value={asd} onChange={(e)=>setAsd(e.target.value)}></input>
        </div>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/">
          <Image src={avatar} width={24} height={24} alt="icon" className="cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  );
}

export default Header