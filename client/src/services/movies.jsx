import axios from "axios";
import { stringify } from "qs";

const getFilteredMovies = async (page, isWishlist, filter) => {
  const query = stringify(
    {
      page: { eq: page },
      ...(isWishlist && { isWatchLater: { eq: isWishlist } }),
      ...(filter.search && { search: { eq: filter.search } }),
      ...(filter.tag && { tag: { eq: filter.tag } }),
      ...(filter.genre && { genre: { eq: filter.genre } }),
      ...(filter.year && {
        year: {
          ...(filter.year.lte && { lte: filter.year.lte }),
          ...(filter.year.gte && { gte: filter.year.gte }),
        },
      }),
      ...(filter.rating && { rating: { eq: filter.rating } }),
    },
    { encode: true }
  );
  const response = await axios.get(`/movies?${query}`);
  return response.data;
};

const updateMovies = async (id, isWatchLater) => {
  const response = await axios.put(`/movies/${id}`, {
    isWatchLater,
  });
  return response;
};

export { getFilteredMovies, updateMovies };
