const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Gallary } = require("../models/Gallary");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  //가져온 이미지를 저장을 해주면 된다.
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/", (req, res) => {
  //받아온 정보를 db에 저장시킨다.
  const gallary = new Gallary(req.body);

  gallary.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/gallaries", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  // gallary collection에 들어있는 모든 상품정보 받아오기
  Gallary.find({})
    .populate("personId")
    .skip(skip) //0번째부터 가져와!
    .limit(limit) //8개만 가져와!
    .exec((err, gallaryInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, gallaryInfo });
    });
});

module.exports = router;
