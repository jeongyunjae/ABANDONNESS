import React, { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="content"></div>
      <Footer />
    </div>
  );
}

export default withRouter(LandingPage);
