import React, {useState} from 'react';

import './App.css';

function Movies(props) {
  const {movies, getMovieById, getMoviesByGenre, getMoviesAll} = props;
  const [genreName, setGenreName] = useState('');
  const [movieId, setMovieId] = useState('');

  const getMoviesByIdClick = () => {
    getMovieById(movieId);
  };

  const getMoviesByGenreClick = () => {
    getMoviesByGenre(genreName);
  };

  const getMoviesAllClick = () => {
    getMoviesAll();
  };

  return (
    <div>
      <h2>Movies</h2>
      <button onClick={getMoviesAllClick}>Get all movies</button>
      <button onClick={getMoviesByIdClick}>Get movies by ID</button>
      <input type="text" id="movieid" placeholder="ID" onChange={event => setMovieId(event.target.value)}></input>

      <button onClick={getMoviesByGenreClick}>Get movies by genre</button>
      <input type="text" id="genrename" placeholder="Genre" onChange={event => setGenreName(event.target.value)}></input>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Year</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
