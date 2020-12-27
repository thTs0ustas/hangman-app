import React from "react";
import "./App.css";
import { Game } from "./components/game/Game";
import Header from "./components/header";
// import {withLocalStorageState} from './app/persistState'

const App = () => (
  <div>
    <Header />
    <Game />
    <Header />
  </div>
);

export default App;
