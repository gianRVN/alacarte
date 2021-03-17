import './App.css';
import React from 'react'
import Movies from './views/Movies'
import Series from './views/Series'
import AddMovie from './views/AddMovie'
import MoviesDetail from './views/MoviesDetail'
import Favorites from './views/Favorites'
import UpdateMovie from './views/UpdateMovie'
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import { ApolloProvider } from '@apollo/client'
import client from "./config/apolloClient"


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/movies/:id">
            <MoviesDetail />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
          <Route exact path="/add-movie">
            <AddMovie />
          </Route>
          <Route exact path="/update-movie/:id">
            <UpdateMovie />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
