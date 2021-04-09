import '../css/App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../components/Main";
import ProductDesc from "../components/ProductDesc";
import Bestseller from "../components/Bestseller";
import ProductCategory from "../components/ProductCategory";
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
          <Route path="/productdesc">
              <Header />
              <Navigation/>
              <ProductDesc />
              <Footer/>
          </Route>
          <Route path="/productCategory">
              <Header />
              <Navigation/>
              <ProductCategory />
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
