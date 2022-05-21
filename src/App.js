import "./App.css";
import Login from "./components/Login";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/Auth/Register";
import LoginPage from "./Pages/Auth/Login";
import ProfilePage from "./Pages/Profile";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { userState } from "./states/userState";
import { Redirect } from "react-router-dom";
import HomePage from "./Pages/Home";
function App() {
  const [user, setUser] = userState.use();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {user.token === false ? <Redirect to="/login" /> : <HomePage />}
        </Route>
        <Route exact path="/profile">
          {user.token === false ? <Redirect to="/login" /> : <ProfilePage />}
        </Route>
        <Route to="/login" component={LoginPage} />
        <Route to="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
