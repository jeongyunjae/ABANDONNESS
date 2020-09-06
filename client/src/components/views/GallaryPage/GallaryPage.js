import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./GallaryPage.css";

function GallaryPage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="gallary-content">
        <div className="gallary-container">
          <ul className="hello">
            <li>
              <Link to="/gallary/upload">업로드</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(GallaryPage);
