const express = require("express"); //express 모듈 가져오기
const app = express(); //새로운 express() 앱 생성
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const config = require("./config/key");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
}

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
