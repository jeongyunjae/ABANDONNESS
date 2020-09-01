import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Axios from "axios";

import "./Header.css";

import { auth } from "../../../actions/user_actions";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const [loginStatus, setLoginStatus] = useState();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    dispatch(auth()).then((response) => {
      setLoginStatus(response.payload.isAuth);
      setUserName(response.payload.name);
    });
  }, []);

  const onClickHandler = () => {
    Axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        setLoginStatus(response.data.isAuth);
        console.log(loginStatus);
        props.history.push("/");
      }
    });
  };
  return (
    <div className="wrapper">
      <div className="header">
        <ul className="auth">
          {loginStatus ? (
            <div className="noListStyle">
              <li>안녕하세요:) {userName}님</li>
              <li>
                <Link onClick={onClickHandler} to="/">
                  로그아웃
                </Link>
              </li>
            </div>
          ) : (
            <div className="noListStyle">
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
            </div>
          )}
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
};

const mapStateToProps = (state) => ({
  userData: state.User.userData,
});

export default connect(mapStateToProps, null)(withRouter(Header));
