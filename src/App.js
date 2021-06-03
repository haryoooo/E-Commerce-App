import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationComponent from "./components/NavigationComponent";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Histories from "./pages/Histories";
import store from "./store/index";
import { Provider } from 'react-redux'
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavigationComponent />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/ProductPage">
              <ProductPage />
            </Route>

            <Route exact path="/Cart">
              <Cart />
            </Route>

            <Route exact path="/Histories">
              <Histories />
            </Route>

            <Route exact path="/login">
              <LoginComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
