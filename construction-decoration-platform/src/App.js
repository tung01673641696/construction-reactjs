import "./App.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routers from "./Routers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
       
        <Routers />
    </div>
  );
}
export default App;
