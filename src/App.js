import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from './component/Create';
import Edit from './component/Edit';
import Home from './component/Home';



function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
   </Router>
    </>
    );
}

export default App;
