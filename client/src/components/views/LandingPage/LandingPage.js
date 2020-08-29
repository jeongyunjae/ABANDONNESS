import React, { useEffect } from "react";
import Axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LandingPage.css";

function LandingPage() {
  useEffect(() => {
    Axios.get("/api/hello").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="content"></div>
      <Footer />
    </div>
  );
}

export default LandingPage;
