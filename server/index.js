const express = require("express"); //express 모듈 가져오기
const app = express(); //새로운 express() 앱 생성
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/key");

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

app.use(cors());

app.use("/api/users", require("./routes/users"));
app.use("/api/gallary", require("./routes/gallary"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
}

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
