import Image from "next/image"
import MoreButton from "./MoreButton";
import PlayButton from "./PlayButton";


const Banner = () => {
  return (
    <section className="h-screen bg-transparent w-full relative">
      <div className="relative  w-full h-full opatiy-40">
        <Image
          src=""
          className="rounded-sm object-cover  md:rounded"
          fill
          alt="Film"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <h1 className="text-5xl font-semibold">Title</h1>
        <p className="text-sm pt-5 w-96 line-clamp-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius non quae deserunt provident obcaecati similique qui numquam dolorem voluptatem saepe harum minus perferendis sit, repellendus doloribus in! Atque, adipisci aliquid! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat et fugit molestiae perspiciatis? Minus autem placeat sint earum accusantium, assumenda voluptate. Aliquam aut aperiam, quo eum sint dolore enim.
        </p>
        <div className="flex items-center space-x-5 pt-5">
            <PlayButton/>
            <MoreButton/>
        </div>
      </div>
    </section>
  );
}

export default Banner