import React, { useState } from "react";
import emailjs from "emailjs-com";
import { withRouter } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ApplyPage.css";

const ApplyPage = (props) => {
  const [applyForm, setApplyForm] = useState({
    name: "",
    phoneNum: "",
    inst: "",
    term: "",
    message: "",
  });

  const { name, phoneNum, inst, term, message } = applyForm;

  const onChange = (e) => {
    const nextForm = {
      ...applyForm,
      [e.target.name]: e.target.value,
    };
    setApplyForm(nextForm);
  };
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_yo0hk9c",
        "template_oigcbp8",
        event.target,
        "user_sYL5UWiM0ru0YERDH5pff"
      )
      .then(
        (result) => {
          alert("지원이 완료되었습니다:) 1~3일 안에 연락드리겠습니다!");
          props.history.push("/");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="apply-content">
        <div className="apply-form">
          <div className="tit-apply">지원하기</div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={sendEmail}
          >
            <div className="pure-group">
              <label className="apply-label">학과, 학번, 이름</label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                placeholder="ex) 컴퓨터학부 20192028 김진영"
                onChange={onChange}
                required
              />
            </div>
            <div className="pure-group">
              <label className="apply-label">연락가능한 번호</label>
              <br />
              <input
                type="text"
                name="phoneNum"
                placeholder="ex) 010-0000-0000"
                value={phoneNum}
                onChange={onChange}
                required
              />
            </div>

            <div className="pure-group">
              <label className="apply-label">지원하는 악기 </label>
              <br />
              <input
                type="text"
                name="inst"
                value={inst}
                placeholder="악기명"
                onChange={onChange}
                required
              />
            </div>

            <div className="pure-group">
              <label className="apply-label">악기 다룬 기간과 활동 경력</label>
              <br />
              <input
                type="text"
                name="term"
                value={term}
                placeholder="없어도 괜찮아요:)"
                onChange={onChange}
                required
              />
            </div>

            <div className="pure-group">
              <label className="apply-label">
                하고 싶은 말을 자유롭게 적어주세요:)
              </label>
              <br />
              <input
                type="text"
                name="message"
                value={message}
                onChange={onChange}
                required
              />
            </div>
            <div className="button-container">
              <button className="button-success" type="submit" value="Send">
                지원
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(ApplyPage);
