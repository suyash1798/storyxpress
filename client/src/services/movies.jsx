import axios from "axios";
import { stringify } from "qs";

const getFilteredMovies = async (page) => {
  const query = stringify(
    {
      page: { eq: page },
    },
    { encode: true }
  );
  const response = await axios.get(`http://localhost:3000/movies?${query}`);
  return response.data;
};

const updateMovies = async (id, isWatchLater) => {
  const response = await axios.put(`http://localhost:3000/movies/${id}`, {
    isWatchLater,
  });
  return response;
};

export { getFilteredMovies , updateMovies };
