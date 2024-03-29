"use client"
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

interface Props {
  movie:Movie
}

const MoreButton = ({movie}:Props) => {
    const router = useRouter()
  return(
  <button
  onClick={()=>router.push(`/${movie.id}`)}
  className="hover:opacity-80 rounded-xl bg-gray-500 text-sm py-2 px-3 text-white flex items-center space-x-2"
  >
<i>
    <InformationCircleIcon className="h-5 w-5"/>
</i>
    <span>read more</span>
  </button>)
};

export default MoreButton;
