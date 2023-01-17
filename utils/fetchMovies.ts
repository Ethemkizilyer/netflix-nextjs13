import axios from "axios";

export const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY!;
export const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
  const {data} = await axios(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
