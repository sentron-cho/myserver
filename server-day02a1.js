const express = require('express');
const path = require('path');
const app = express();

// 메인 페이지 접속시 html 응답하는 방법

// 미들웨어 : html, css, js, img 파일들이 담긴 곳 명시
app.use(express.static( path.join(__dirname, 'public')))

app.get('/',function(request, response){
    response.sendFile( path.join(__dirname, 'public/main.html'))
})

// 데이터 받아서 전송 예시 
app.get('/api/hello', (req, res) => {
    console.log("===========> [GET]/api/hello call!")
    console.log("서버에서 데이터를 가져온다.")
    res.send('[GET]서버에서 데이터를 가져온다.'); 
});

app.post('/api/hello', (req, res) => {
  console.log("===========> [POST]/api/hello call!")
  console.log("서버에 데이터를 전달한다.")
  res.send('[POST]서버에 데이터를 전달한다.'); 
});

app.delete('/api/hello', (req, res) => {
  console.log("===========> [DELETE]/api/hello call!")
  console.log("서버에서 데이터를 삭제한다.")
  res.send('[DELETE]서버에서 데이터를 삭제한다.'); 
});

app.put('/api/hello', (req, res) => {
  console.log("===========> [PUT]/api/hello call!")
  console.log("서버에서 데이터를 수정한다.")
  res.send('[PUT]서버에서 데이터를 수정한다.'); 
});

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 