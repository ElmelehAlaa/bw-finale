import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyHomePage from "./Components/MyHomePage";
import Fatture from "./Components/Fatture.jsx";
import Clienti from "./Components/Clienti";
import CreateClienti from "./Components/CreateClienti";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fatture" element={<Fatture />} />
          <Route path="/home" element={<MyHomePage />} />
          <Route path="/clienti" element={<Clienti />} />
          <Route path="/clienti/create" element={<CreateClienti />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
