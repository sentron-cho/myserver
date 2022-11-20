const express = require("express");
const router = express.Router();

// 데이터 받아서 전송 예시 
router.get('/', (req, res) => {
  console.log("===========> [GET]/api/http call! req.query로 가져온다.")
  console.log(req.query)
  res.send('[GET]req.params로 전달하고 req.query로 받는다.'); 
});

router.post('/', (req, res) => {
  console.log("===========> [POST]/api/http call!")
  console.log(req.body)
  res.send('[POST]req.body로 전달하고 req.body로 받는다.'); 
});

router.put('/', (req, res) => {
  console.log("===========> [PUT]/api/http call!")
  console.log(req.body)
  res.send('[PUT]req.body로 전달하고 req.body로 받는다.'); 
});

router.delete('/', (req, res) => {
  console.log("===========> [DELETE]/api/http call!")
  console.log(req.query)
  res.send('[GET]req.params로 전달하고 req.query로 받는다.');
});


module.exports = router;