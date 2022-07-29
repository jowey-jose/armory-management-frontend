import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddArmoryItem from "./components/AddArmoryItem";
import ArmoryItem from "./components/ArmoryItem";
import ArmoryItemList from "./components/ArmoryItemList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/armory-item-list" className="navbar-brand">
          Armory Management System
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/armory-item-list"} className="nav-link">
              Armory Item List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add-armory-item"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ArmoryItemList/>} />
          <Route path="/armory-item-list" element={<ArmoryItemList/>} />
          <Route path="/add-armory-item" element={<AddArmoryItem/>} />
          <Route path="/armory-item/:id" element={<ArmoryItem/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;