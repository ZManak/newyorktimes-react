import Home from "./Home/Home";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    )
  }
}

export default Main;
