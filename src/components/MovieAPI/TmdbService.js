// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '?api_key=3035a2e62fc23afedb7da1c6546b79a9'; // Replace with your API key

// export const fetchMovies = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     return [];
//   }
// };



import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

// Existing function to fetch popular movies
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// New function to fetch a single movie by its ID
export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    return null;
  }
};
