import React, {useState, useEffect} from 'react';
import {
  Route,
  Switch,
  // Prompt,
  useHistory,
  // useParams,
  // Redirect
} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Movies from './Movies';
import Login from './Login';

import './App.css';

function NoMatch() {
  return (
    <div>
      <h2>This URL does not exist!</h2>
    </div>
  );
}

function App({apiFacade, match}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const emptyItem = {title: '', year: '', id: '', votes: ''};
  const [movies, setMovies] = useState([emptyItem]);

  let history = useHistory();

  const login = (username, password) => {
    console.log(username, password);
    apiFacade
      .login(username, password)
      .then(data => {
        setIsLoggedIn(apiFacade.loggedIn);
        setUsername(username);
        // getItems();
        // console.log(items);
        history.push('/');
      })
      .catch(err => {
        console.log('Ups login:' + err);
        // history.push("/");
      });
    history.push('/');
  };

  const logout = () => {
    apiFacade.logout();
    setIsLoggedIn(apiFacade.loggedIn);
    setUsername('');
    history.push('/');
  };

  // Get all items from back-end when rendering
  useEffect(() => {
    // getItems();
  }, [apiFacade]);

  // Get all items from back-end
  const getMovieById = id => {
    console.log('getMovieById:', id);
    apiFacade
      .getMovieById(id)
      .then(data => {
        console.log(data);
        let dataArray = [];
        dataArray.push(data);
        setMovies(dataArray);
      })
      .catch(err => {
        console.log('Ups refreshitems:' + err);
        setMovies([emptyItem]);
      });
  };
  const getMoviesByGenre = genreName => {
    console.log('getMoviesByGenre:', genreName);
    apiFacade
      .getMoviesByGenre(genreName)
      .then(data => {
        // console.log('h:', data);
        setMovies(data);
      })
      .catch(err => {
        console.log('Ups refreshitems:' + err);
        setMovies([emptyItem]);
      });
  };

  const getMoviesAll = () => {
    console.log('getMoviesAll');
    apiFacade
      .getMoviesAll()
      .then(data => {
        // console.log('h:', data);
        setMovies(data);
      })
      .catch(err => console.log('Ups refreshitems:' + err));
  };

  return (
    <div>
      <Nav loginMsg={isLoggedIn ? 'Logout' : 'Login'} isLoggedIn={isLoggedIn} username={username} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies" exact>
          <Movies movies={movies} getMovieById={getMovieById} getMoviesByGenre={getMoviesByGenre} getMoviesAll={getMoviesAll} />
        </Route>
        <Route path="/login-out">
          <Login isLoggedIn={isLoggedIn} login={login} logout={logout} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
