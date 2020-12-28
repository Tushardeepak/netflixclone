import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./components/main/ForgetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/signUp" component={Main} />
            <Route exact path="/forgetPassword" component={ForgetPassword} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
