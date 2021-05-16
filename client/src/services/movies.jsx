import axios from "axios";
import { stringify } from "qs";

const getFilteredMovies = async (page, isWishlist, filter) => {
    console.log(filter.search);
  const query = stringify(
    {
      page: { eq: page },
      ...(isWishlist && { isWatchLater: { eq: isWishlist } }),
      ...(filter.search && {search:{eq:filter.search}}),
      ...(filter.tag && {tag:{eq:filter.tag}}),
      ...(filter.genre && {genre:{eq:filter.genre}}),
      ...(filter.rating && {search:{eq:filter.rating}}),
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

export { getFilteredMovies, updateMovies };
