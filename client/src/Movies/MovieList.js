import React from 'react';
import {useHistory, Link} from 'react-router-dom';
const MovieList = props => {
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to = {`/movies/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie} />
      </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const history = useHistory();
  const routeToMovie = () =>{
    history.push('./movies/id');
  
  }
  const { title, director, metascore } = movie;
  return (
    
    <div className="movie-card">
      
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
        <button onClick={routeToMovie} className='md-button movie-button'>Movie!</button>
      </div>
    </div>
  );
}

export default MovieList;
