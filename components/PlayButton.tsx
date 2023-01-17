"use client";

import { modalState, movieState } from "@/atoms/movieState";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
interface Props {
  movie: Movie;
  videos: any;
}

const PlayButton = ({ movie, videos }: Props) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [sltMovie, setsltMovie] = useRecoilState(movieState);
  return (
    <button
      onClick={() => {
        setsltMovie(videos);
        setModal(true);
      }}
      className="hover:opacity-980 rounded-xl bg-white text-sm py-2 px-3 text-slate-900 flex items-center space-x-2"
    >
      <i>
        <PlayIcon className="h-5 w-5" />
      </i>
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
