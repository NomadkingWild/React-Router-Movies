import React, { useState, useEffect } from 'react';
import{ useHistory, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';




const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const history = useHistory()
  const routeToHome = () =>{
    history.push('/');
  
  } 
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
      <Switch>
        <Route path='/movies/:id'><Movie movies={movieList}/></Route>
        <Route path='/'><MovieList movies={movieList}/></Route>
      </Switch>
    </div>
    
   
  );
};

export default App;
