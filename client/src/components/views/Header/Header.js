import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <ul className="auth">
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>회원가입</li>
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

export default Header;
