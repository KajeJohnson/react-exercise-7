import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MenuList from "./components/MenutList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuList />
      <Sidebar />
    </div>
  );
}

export default App;
