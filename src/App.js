import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './Responsive.css';
import ClubDetails from "./Component/ClubDetails/ClubDetails";
import Clubs from "./Component/Clubs/Clubs";
import Header from "./Component/Header/Header";
import NoMatch from "./Component/NoMatch/NoMatch";
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/clubdetails/:idTeam">
            <ClubDetails></ClubDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
