import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Install from "./pages/Install";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import 'react-tooltip/dist/react-tooltip.css'

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/install" element={<Install />} />
      </Routes>
    </>
  );
}

export default App;
