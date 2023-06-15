import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";
import React, { useEffect } from "react";

import 'react-tooltip/dist/react-tooltip.css';

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
        {/* TODO 404 page? Or leave it to redirect back to home like this? */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
