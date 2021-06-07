import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;