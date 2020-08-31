import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

import "./Header.css";
import Axios from "axios";

function Header(props) {
  const onClickHandler = () => {
    Axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/");
        alert("로그아웃 완료");
      }
    });
  };
  return (
    <div className="wrapper">
      <div className="header">
        <ul className="auth">
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/register">회원가입</Link>
          </li>
          <li>
            <Link onClick={onClickHandler} to="/">
              로그아웃
            </Link>
          </li>
        </ul>
        <div className="container">
          <div className="header-logo">
            <Link to="/">ABANDONNESS</Link>
          </div>
          <nav>
            <ul className="menu">
              <li>동아리소개</li>
              <li>지원하기</li>
              <li>갤러리</li>
              <li>공지사항</li>
              <li>커뮤니티</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
