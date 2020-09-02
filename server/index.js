const express = require("express"); //express 모듈 가져오기
const app = express(); //새로운 express() 앱 생성
let { User } = require("./models/User");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/key");
const { auth } = require("./middleware/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // json을 parse하도록 함
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
}

app.get("/api/users", (req, res) => res.send(""));

app.get("/api/hello", (req, res) => res.send(""));

app.post("/api/users/register", (req, res) => {
  //회원 가입 할떄 필요한 정보들을  client에서 가져오면
  //그것들을  데이터 베이스에 넣어준다.
  const user = new User(req.body);
  User.findOne({ usersId: user.usersId }, (err, users) => {
    if (users) {
      return res.status(200).json({
        signUpSuccess: false,
        message: "이미 가입된 아이디입니다.",
      });
    } else if (user.circlesPassword !== 104105) {
      return res.status(200).json({
        signUpSuccess: false,
        message: "동아리방 비밀번호가 틀렸습니다",
      });
    } else {
      user.save((err, userInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({
          signUpSuccess: true,
          name: user.name,
        });
      });
    }
  });
});

app.post("/api/users/login", (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ usersId: req.body.usersId }, (err, user) => {
    // console.log('user', user)
    if (!user) {
      return res.status(200).json({
        loginSuccess: false,
        message: "가입하지 않은 아이디입니다.",
      });
    }

    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.status(200).json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      //비밀번호 까지 맞다면 토큰을 생성하기.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id, name: user.name });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    name: req.user.name,
    isAuth: true,
    isAdmin: req.user.role === 0 ? false : true,
    usersId: req.user.usersId,
    role: req.user.role,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).send({
      success: true,
      isAuth: false,
      isAdmin: false,
    });
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
