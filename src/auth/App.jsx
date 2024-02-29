import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
