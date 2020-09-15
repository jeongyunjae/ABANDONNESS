import React from "react";
import { CopyrightOutlined } from "@ant-design/icons";

import "./Footer.css";

function Footer() {
  return (
    <div className="wrapper">
      <div className="footer">
        <CopyrightOutlined style={{ fontSize: "10px" }} />
        &nbsp;2020. &nbsp;ABANDONNESS ORCHESTRA.&nbsp;ALL RIGHTS RESERVED.
      </div>
    </div>
  );
}

export default Footer;
