import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import AboutPage from "./components/views/AboutPage/AboutPage";
import ApplyPage from "./components/views/ApplyPage/ApplyPage";
import GalleryPage from "./components/views/GalleryPage/GalleryPage";
import UploadGalleryPage from "./components/views/UploadGalleryPage/UploadGalleryPage";
import NoticePage from "./components/views/NoticePage/NoticePage";
import CommunityPage from "./components/views/CommunityPage/CommunityPage";
import DetailGalleryPage from "./components/views/DetailGalleryPage/DetailGalleryPage";

import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/about" component={Auth(AboutPage, null)} />
          <Route exact path="/apply" component={Auth(ApplyPage, null)} />
          <Route exact path="/gallery" component={Auth(GalleryPage, null)} />
          <Route exact path="/notice" component={Auth(NoticePage, null)} />
          <Route
            exact
            path="/community"
            component={Auth(CommunityPage, null)}
          />
          <Route
            exact
            path="/gallery/upload"
            component={Auth(UploadGalleryPage, true, true)}
          />
          <Route
            exact
            path="/gallery/:galleryId"
            component={Auth(DetailGalleryPage, true)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
