import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AddWeapon from "./components/add-weapon.component";
// import WeaponDetails from "./components/weapon-details.component";
// import ArmoryList from "./components/armory-list.component";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/armory-list"} className="navbar-brand">
            Armory Management
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/armory-list"} className="nav-link">
                Armory List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-weapon"} className="nav-link">
                Add Weapon
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            {/* <Route exact path={["/", "/armory-list"]} component={ArmoryList} /> */}
            {/* <Route exact path="/add-weapon" component={AddWeapon} /> */}
            {/* <Route path="/weapon-details/:id" component={WeaponDetails} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;