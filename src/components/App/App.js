import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchView from "../SearchView/SeachView.jsx";
import FavView from "../FavView/FavView.jsx";
import SeachView from '../SearchView/SeachView.jsx';




function App() {
  return (
        <Router>
            <div>
              <h1>Giphy Search!</h1>
              <nav>
                <Link to="/">Search</Link>
                <Link to="/favView">Favorites</Link>
              </nav>
                <Route exact path='/'>
                    <SearchView/>   
                </Route>
                <Route exact path="/favView">
                    <FavView/>
                </Route>
            </div>
        </Router>
      );
}

export default App;
