import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <ul className="auth">
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
        <div className="container">
          <div className="header-logo">ABANDONNESS</div>
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
