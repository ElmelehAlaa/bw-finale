import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyHomePage from "./Components/MyHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/HomePage" element={<MyHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;