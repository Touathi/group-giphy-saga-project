import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchView from "../SearchView/SeachView.jsx";
import FavView from "../FavView/FavView.jsx";




function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>

            <Router>

                <Route exact path='/search'>
                    <SearchView/>   
                </Route>
                <Route exact path="/favView">
                    <FavView/>
                </Route>
            </Router>
    </div>
  );
}

export default App;
