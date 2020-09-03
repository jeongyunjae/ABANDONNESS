import React, { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import ReactPlayer from "react-player";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="landing-content">
        <div className="landing-container">
          <div className="backgroundImage"></div>
          <div className="player-content">
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=_h8Kvg1RxD4&t=1708s"
              controls
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(LandingPage);
