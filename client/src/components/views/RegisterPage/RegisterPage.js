import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../../actions/user_actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./RegisterPage.css";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [UsersId, setUsersId] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");
  const [Name, setName] = useState("");
  const [InstName, setInstName] = useState("");
  const [CirclesPassword, setCirclesPassword] = useState("");

  const onUsersIdHandler = (event) => {
    setUsersId(event.currentTarget.value);
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

  const onInstNameHandler = (event) => {
    setInstName(event.currentTarget.value);
  };

  const onCirclesPasswordHandler = (event) => {
    setCirclesPassword(event.currentTarget.value);
  };

  let body = {
    usersId: UsersId,
    password: Password,
    name: Name,
    instName: InstName,
    circlesPassword: CirclesPassword,
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.signUpSuccess) {
        if (Password !== CheckPassword) {
          alert("비밀번호가 같지 않습니다!");
        } else {
          alert("회원가입이 완료되었습니다");
          props.history.push("/login");
        }
      } else {
        alert(response.payload.message);
      }
    });
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
            <label>하는 악기</label>
            <input
              type="name"
              placeholder="악기이름(한글)"
              value={InstName}
              onChange={onInstNameHandler}
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

export default withRouter(RegisterPage);
