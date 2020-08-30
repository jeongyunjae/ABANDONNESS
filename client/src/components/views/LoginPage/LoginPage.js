import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="Login-form">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label>이메일</label>
            <input type="email" value onChange />
            <label>비밀번호</label>
            <input type="password" value onChange />
            <br />
            <button>로그인</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
