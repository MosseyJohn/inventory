import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import AddClient from "./pages/addClient";
import ClientList from './pages/clientList';
import InventoryList from './pages/inventoryList';
import MatchScreen from './pages/matchScreen';


class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <nav>
              <Link to="/">Add Client</Link>
              <Link to="/clientlist">Client List</Link>
              <Link to="/inventory">Inventory List</Link>
              <Link to='/matchScreen'>Matches</Link>
            </nav>
            <Route path="/" exact component={AddClient} />

            <Route path="/clientlist" component={ClientList} />

            <Route path="/inventory" component={InventoryList} />

            <Route path='/matchScreen' component={MatchScreen} />

          </div>
        </Router>
      

    );
  }
}

export default App;
