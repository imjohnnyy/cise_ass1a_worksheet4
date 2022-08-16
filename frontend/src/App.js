import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate} from "react-router-dom";
import "./index.css"

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";


const App = () => {
  return (
    <Router >
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/SEPractice" >Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle" >Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/SEPractice" element={<SEPractice />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;