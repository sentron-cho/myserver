const express = require('express');
const path = require('path');
const app = express();

// 메인 페이지 접속시 html 응답하는 방법

// 미들웨어 : html, css, js, img 파일들이 담긴 곳 명시
app.use(express.static( path.join(__dirname, 'public')))

app.get('/',function(request, response){
    response.sendFile( path.join(__dirname, 'public/main.html'))
})

const hello = require("./src/api/hello");
app.use("/api/hello", hello);

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 


// const Console = require('./src/console');
// Console.time()
// Console.log()
// Console.dir()
// Console.rest()
// Console.trace()

// const Timer = require('./src/timer');
// Timer.timeout()
// Timer.interval()
// Timer.clear()
// Timer.counter()

console.log(__filename);
console.log(__dirname);

const System = require('./src/system');
System.info()


// consoletest()