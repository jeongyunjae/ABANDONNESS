import React, { useEffect } from "react";
import Axios from "axios";

import Header from "../Header/Header";

function LandingPage() {
  useEffect(() => {
    Axios.get("/api/hello").then((response) => {
      console.log(response.data);
    });
  }, []);
  return <Header />;
}

export default LandingPage;
