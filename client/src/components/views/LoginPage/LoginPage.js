import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../../../actions/user_actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LoginPage.css";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  let body = {
    email: Email,
    password: Password,
  };

  dispatch(loginUser(body)).then((response) => {
    if (response.payload.loginSuccess) {
      props.history.push("/");
      console.log(response.payload.name);
    }
  });

  return (
    <div>
      <Header />
      <div className="content">
        <div className="Login-form">
          <form onSubmit={onSubmitHandler}>
            <label>이메일</label>
            <input
              type="email"
              placeholder="이메일"
              value={Email}
              onChange={onEmailHandler}
            />
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              value={Password}
              onChange={onPasswordHandler}
            />
            <br />
            <input type="submit" value="저장" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
