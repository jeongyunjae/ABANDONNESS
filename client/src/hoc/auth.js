import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../actions/user_actions";
import { withRouter } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  //option은 null, true, false를 사용가능 null은 모든 사용자, true는 로그인한 사용자, false는 로그인하지 않은 사용자,
  //adminRoute는 사용하지 않으면 null로 아무나 출입가능, true를 쓰면 관리자만 사용가능하게 전환
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        if (!response.payload.isAuth) {
          if (option) {
            alert("로그인이 필요합니다.");
            props.history.push("/login");
          } else if (adminRoute) {
            alert("관리자 권한이 필요합니다.");
            props.history.push("/");
          }
        } else {
          if (option === false) {
            alert("이미 로그인이 되어있습니다.");
            props.history.push("/");
          } else if (adminRoute && !response.payload.isAdmin) {
            alert("관리자 권한이 필요합니다.");
            props.history.push("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return withRouter(AuthenticationCheck);
}
