import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import AppBar from './components/AppBar';
import routes from './routes';

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
