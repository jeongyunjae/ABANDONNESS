const express = require("express");
const router = express.Router();

router.post("/image", (req, res) => {
  //가져온 이미지를 저장을 해주면 된다.
  upload(req, res, (err) => {
    if (err) {
      return req.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

module.exports = router;
