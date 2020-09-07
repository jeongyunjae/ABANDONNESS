import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="about-content">
        <div className="about-container">
          <div className="about-us">
            <div className="about-image" />
            <div className="explain-container">
              <div className="aban1">아반도네즈는</div>
              <div className="aban2">
                <p>
                  &quot;자유분방하게 연주하라&quot;는 뜻을 지닌 클래식 용어
                  abandonne와 &quot;숭실&quot;의 약자인 SS가 합쳐져 탄생한
                  이름입니다.
                </p>
                <p>
                  이름의 의미처럼 아반도네즈는 음악이 주는 무한한 즐거움을 주위
                  사람들과 함께 공유하며 즐기는 것을 목표로 합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="history" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
