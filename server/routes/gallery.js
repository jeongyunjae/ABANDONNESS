const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Gallery } = require("../models/Gallery");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

let upload = multer({ storage: storage }).single("file");

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
  const gallery = new Gallery(req.body);

  gallery.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/galleries", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let term = req.body.SearchTerm;
  // gallery collection에 들어있는 모든 상품정보 받아오기

  if (term) {
    Gallery.find({ $text: { $search: term } }) //term이 있는 거만 찾아서 데이터 전달
      .skip(skip) //0번째부터 가져와!
      .limit(limit) //3개만 가져와!
      .exec((err, galleryInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, galleryInfo });
      });
  } else {
    Gallery.find({})
      .populate("personId")
      .skip(skip) //0번째부터 가져와!
      .limit(limit) //8개만 가져와!
      .exec((err, galleryInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, galleryInfo });
      });
  }
});

router.get("/galleries_by_id", (req, res) => {
  let type = req.query.type;
  let galleryId = req.query.id;

  Gallery.find({ _id: galleryId }).exec((err, gallery) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send({ success: true, gallery });
  });

  //galleryId를 이용해서 db에서 galleryId와 같은 상품의 정보를 가져온다.
});

module.exports = router;
