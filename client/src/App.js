import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import { Router } from 'express';
import{Link, Route, Switch} from 'react-router-dom';


const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route path='/'><movieList items={movieList}/></Route>
      <Route path='/movies/:id'><movies items={movieList}/></Route>
    </div>
   
  );
};

export default App;
