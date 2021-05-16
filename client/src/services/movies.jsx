import axios from "axios";
import { stringify } from "qs";

const getFilteredMovies = async (page) => {
  const query = stringify(
    {
      page: { eq: page },
    },
    { encode: true }
  );
  const response = await axios.get(`https://suyash-tiwari-storyxpress.herokuapp.com/movies?${query}`);
  return response.data;
};

const updateMovies = async (id, isWatchLater) => {
  const response = await axios.put(`https://suyash-tiwari-storyxpress.herokuapp.com/movies/${id}`, {
    isWatchLater,
  });
  return response;
};

export { getFilteredMovies , updateMovies };
