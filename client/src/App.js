import './App.css';
import MoviesPage from 'pages/movies/movies';
import React from 'react';
import '@fontsource/roboto';
import axios from 'axios';

function App() {

  if(process.env.NODE_ENV === "production"){
      axios.defaults.baseURL = 'https://suyash-tiwari-storyxpress.herokuapp.com'
  }else{
    axios.defaults.baseURL = 'http://localhost:3000'
  }
  
  return (
    <MoviesPage />
  );
}

export default App;
