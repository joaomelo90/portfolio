import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Start from "./pages/Start"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contacts from "./pages/Contacts"

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/sobre" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contatos" element={<Contacts/>} />
      </Routes>
    </Router>

  )
}

export default App