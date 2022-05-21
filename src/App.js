import "./App.css";
import Login from "./components/Login";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/Auth/Register";
import LoginPage from "./Pages/Auth/Login";
import MainPage from "./Pages/Main";
function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
