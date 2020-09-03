import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Axios from "axios";

import logo from "../../../img/logo.png";

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
              <li>
                <span>{userName}</span>님
              </li>
              <li>
                <Link onClick={onClickHandler} to="/">
                  로그아웃
                </Link>
              </li>
            </div>
          ) : (
            <div className="noListStyle">
              <li>
                <Link style={{ color: "#ffffff" }} to="/login">
                  로그인
                </Link>
              </li>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
            </div>
          )}
        </ul>
        <div className="container">
          <div className="header-logo">
            <Link to="/">
              <img src={logo}></img>
            </Link>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/apply">APPLY</Link>
              </li>
              <li>
                <Link to="#">GALLARY</Link>
              </li>
              <li>
                <Link to="#">NOTICE</Link>
              </li>
              <li>
                <Link to="#">COMMUNITY</Link>
              </li>
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

export default withRouter(Header);
