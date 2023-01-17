import {atom} from "recoil"

export const modalState = atom<any | null>({
  key: "modalState",
  default: false,
});

export const movieState=atom<any | null>({
    key:"moviestate",
    default:{},
})