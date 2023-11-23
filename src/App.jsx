import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyHomePage from "./Components/MyHomePage";

import ListaFatture from "./Components/ListaFatture.jsx";
import Fatture from "./Components/Fatture.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/homePage" element={<MyHomePage />} />
          <Route path="/fatture" element={<Fatture />} />
          <Route path="/visualizza-fatture" element={<ListaFatture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
