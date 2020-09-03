import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ApplyPage.css";

const ApplyPage = () => {
  return (
    <div>
      <Header />
      <div className="content"></div>
      <Footer />
    </div>
  );
};

export default ApplyPage;
