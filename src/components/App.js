import '../css/App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../components/Main";
import Bestseller from "../components/Bestseller";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route path="/bestsellers">
              <Header />
              <Navigation/>
              <Bestseller />
              <Footer/>
          </Route>
          <Route path="/">
            <Header />
            <Navigation/>
            <Main />
            <Footer/>
          </Route>
          
          </Switch>
      </div>
    </Router>
  );
}

export default App;
