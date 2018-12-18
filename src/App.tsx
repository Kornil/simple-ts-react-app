// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Routes from "./Routes";

// tslint:disable-next-line:no-var-requires
const reactLogo = require("./assets/React-icon.png");

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div>
        <h1>hello world!</h1>
        <img className="container__image" alt="react logo" src={reactLogo} />
        <p>If you see this everything is working!</p>
      </div>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
