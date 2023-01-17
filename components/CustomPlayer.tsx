"use client";
import { modalState, movieState } from "@/atoms/movieState";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";


const CustomPlayer = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [sltMovie, setsltMovie] = useRecoilState(movieState);
  return (
    <div
    onClick={()=>setModal(false)}
      className={`${
        !modal && "hidden "
      } fixed inset-0 z-30 bg-black bg-opacity-50`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        {modal && sltMovie[0]?.key && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${sltMovie[0]?.key}`}
            width="80%"
            height="80%"
            style={{ top: "20", left: "20", position: "absolute" }}
            muted={false}
            playing
          />
        )}
      </div>
    </div>
  );
};

export default CustomPlayer;
