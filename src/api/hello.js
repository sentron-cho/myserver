const express = require("express");
const router = express.Router();

// 데이터 받아서 전송 예시 
router.get('/', (req, res) => {
    console.log("===========> [GET]/api/hello call!")
    console.log("서버에서 데이터를 가져온다.")
    res.send('[GET]서버에서 데이터를 가져온다.'); 
});

router.post('/', (req, res) => {
  console.log("===========> [POST]/api/hello call!")
  console.log("서버에 데이터를 전달한다.")
  res.send('[POST]서버에 데이터를 전달한다.'); 
});

router.delete('/', (req, res) => {
  console.log("===========> [DELETE]/api/hello call!")
  console.log("서버에서 데이터를 삭제한다.")
  res.send('[DELETE]서버에서 데이터를 삭제한다.'); 
});

router.put('/', (req, res) => {
  console.log("===========> [PUT]/api/hello call!")
  console.log("서버에서 데이터를 수정한다.")
  res.send('[PUT]서버에서 데이터를 수정한다.'); 
});

module.exports = router;