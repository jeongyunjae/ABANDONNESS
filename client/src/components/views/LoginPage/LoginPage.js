import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../../../actions/user_actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LoginPage.css";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [UsersId, setUsersId] = useState("");
  const [Password, setPassword] = useState("");

  const onUsersIdHandler = (event) => {
    setUsersId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert(response.payload.message);
      }
    });
  };
  let body = {
    usersId: UsersId,
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
            <label>아이디</label>
            <input
              type="id"
              placeholder="아이디"
              value={UsersId}
              onChange={onUsersIdHandler}
            />
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              value={Password}
              onChange={onPasswordHandler}
            />
            <br />
            <input type="submit" value="로그인" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(LoginPage);
