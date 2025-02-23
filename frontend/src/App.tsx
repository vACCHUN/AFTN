import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Clock from "./Components/Clock";
import Navbar from "./Components/Navbar";

import ResidoPage from "./pages/ResidoPage";
import TaviratPage from "./pages/TaviratPage";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 py-3">
        <div className="w-fit px-2">
          <div className="p-1 bg-[#f5f5f5]">
            <span className="bg-[#f0f0f0] p-1 border-1 border-blue-500 text-lime-500 font-bold">LINE</span>
          </div>
        </div>
        <div className="flex justify-end px-12">
          <Clock></Clock>
        </div>
      </div>

      <div className="m-1">
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/tavirat" element={<TaviratPage/>} />
            <Route path="/" element={<ResidoPage />} />
            <Route path="/fpl-resido" element={<>FPL résidő</>} />
            <Route path="/notam" element={<>NOTAM</>} />
            <Route path="/jelzes-nyomtatas" element={<>J-NY</>} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
