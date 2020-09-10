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
  //const [CirclesPassword, setCirclesPassword] = useState("");

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

  /*const onCirclesPasswordHandler = (event) => {
    setCirclesPassword(event.currentTarget.value);
  }; */

  let body = {
    usersId: UsersId,
    password: Password,
    name: Name,
    instName: InstName, //circlesPassword: CirclesPassword,
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
    <div className="wrapper">
      <Header />
      <div className="signup-content">
        <div className="signup-form">
          <div className="tit-signup">회원가입</div>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={onSubmitHandler}
          >
            <label>아이디</label>
            <input
              type="id"
              placeholder="아이디를 입력해주세요"
              value={UsersId}
              onChange={onUsersIdHandler}
              required
            />
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={Password}
              onChange={onPasswordHandler}
              required
            />
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한번 더 확인해주세요"
              value={CheckPassword}
              onChange={onCheckPasswordHandler}
              required
            />
            <label>이름</label>
            <input
              type="name"
              placeholder="이름을 입력해주세요"
              value={Name}
              onChange={onNameHandler}
              required
            />
            <label>연주하는 악기</label>
            <input
              type="name"
              placeholder="한글로 작성해주세요"
              value={InstName}
              onChange={onInstNameHandler}
              required
            />
            {/*<label>단원확인</label>
            <input
              type="password"
              placeholder="동방 비밀번호"
              value={CirclesPassword}
              onChange={onCirclesPasswordHandler}
              required
            />*/}
            <button type="submit">가입하기</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(RegisterPage);
