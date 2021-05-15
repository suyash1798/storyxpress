import axios from "axios"

const getFilteredMovies = async ()=>{
    const response = await axios.get('http://localhost:3000/movies')
    return response.data;
}

export {getFilteredMovies}