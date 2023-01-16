"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import Thumbnail from "./Thumbnail";

const Row = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setMoved] = useState(false);

  console.log(rowRef.current?.clientWidth);

  const handleClick = (direction: string) => {
    setMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="h-40 space-y-1 md:space-y-2 px-5 pb-20">
      <h2 className="w-56 pt-5 cursor-pointer text-sm font-semibold text-gray-50 transition duration-150 hover:text-gray-300 md:text-xl">
        Top Rated
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`${
            !isMoved && "hidden "
          } absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-150 group-hover:opacity-100`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-1 overflow-scroll scrollbar-hide md:space-x-3 md:p-2"
        >
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-150 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </section>
  );
};

export default Row;
