import * as React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import About from "./components/AboutUs/about";
import Contactus from "./components/ContactUs/contactus";
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import WorkCollection from "./components/Work/workCollection";
function App(props: any) {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contactus}></Route>
          <Route path="/work" component={WorkCollection}></Route>
        </Switch>
    </div>
  );
}

export default App;
