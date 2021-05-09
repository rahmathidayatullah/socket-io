import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "pages/dashboard";
import Login from "pages/login";
import Register from "pages/register";
import Index from "pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
