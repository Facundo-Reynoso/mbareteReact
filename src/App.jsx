import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME } from "./routes/rutas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
