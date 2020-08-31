import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "../../../actions/user_actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./RegisterPage.css";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");
  const [Name, setName] = useState("");
  const [CirclesPassword, setCirclesPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onCheckPasswordHandler = (event) => {
    setCheckPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onCirclesPasswordHandler = (event) => {
    setCirclesPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
        console.log(response.payload.name);
      }
      if (response.payload.loginSuccess === false) {
      }
    });
  };
  let body = {
    email: Email,
    password: Password,
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div className="Login-form">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={onSubmitHandler}
          >
            <label>이메일 주소</label>
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
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={CheckPassword}
              onChange={onCheckPasswordHandler}
            />
            <label>이름</label>
            <input
              type="name"
              placeholder="이름"
              value={Name}
              onChange={onNameHandler}
            />
            <label>동방비밀번호</label>
            <input
              type="password"
              placeholder="동방 비밀번호"
              value={CirclesPassword}
              onChange={onCirclesPasswordHandler}
            />
            <br />
            <input type="submit" value="회원가입" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
