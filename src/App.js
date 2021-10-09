import { useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// home
import HomeScreen from "./navigation/HomeScreen";
import Products from "./screens/Products/Products";
import Login from "./screens/Login/Login";
import Cart from "./screens/Cart/Cart";
import Dashbord from "./screens/Dashbord/Dashbord";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <ToastContainer theme="dark" className={"TOST"} />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/Products">
          <Products />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>
        <Route exact path="/Dashbord">
          <Dashbord />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
