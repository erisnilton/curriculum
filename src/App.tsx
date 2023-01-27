import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import { Main } from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
