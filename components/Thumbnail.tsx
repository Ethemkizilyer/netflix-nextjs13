import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Thumbnail = () => {
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Link href={"/"}>
        <Image
          src="https://wp.oggusto.com/wp-content/uploads/2022/02/2022de-Mutlaka-Izlemeniz-Gereken-Netflix-Filmleri.jpg"
          className="rounded-sm object-cover md-rounded"
          alt='Film' fill
        />
      </Link>
    </div>
  );
}

export default Thumbnail