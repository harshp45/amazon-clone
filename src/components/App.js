import '../css/App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../components/Main";
import Bestseller from "../components/Bestseller";
import Books from "../components/Product Category/Books";
import Camera from "../components/Product Category/Camera";
import Drugs from "../components/Product Category/Drugs";
import Electronics from "../components/Product Category/Electronics";
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
          <Route path="/books">
              <Header />
              <Navigation/>
              <Books />
              <Footer/>
          </Route>
          <Route path="/drugs">
              <Header />
              <Navigation/>
              <Drugs />
              <Footer/>
          </Route>
          <Route path="/camera">
              <Header />
              <Navigation/>
              <Camera />
              <Footer/>
          </Route>
          <Route path="/electronics">
              <Header />
              <Navigation/>
              <Electronics />
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
