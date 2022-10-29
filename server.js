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

const Path = require('./src/Day03/path');
// Path.dir();
// Path.filepath();
Path.filename();
// Path.path();

// const Console = require('./src/Day03/console');
// Console.time()
// Console.log()
// Console.dir()
// Console.rest()
// Console.trace()

// const Timer = require('./src/Day03/timer');
// Timer.timeout()
// Timer.interval()
// Timer.clear()
// Timer.counter()

// const System = require('./src/Day03/system');
// System.info()

// const Moment = require("./src/Day03/moment");
// Moment.today()
// Moment.date()
// Moment.format()
// Moment.add()
// Moment.diff()
// Moment.print()

// const Module = require("./src/Day04/module")
// console.log(Module.add(1, 2))
// console.log(Module.sub(2, 1))
// console.log(Module.mul(3, 4))
// console.log(Module.div(10, 2))

// const {add, sub, mul, div} = require("./src/Day04/module")
// console.log(add(1, 2))
// console.log(sub(2, 1))
// console.log(mul(3, 4))
// console.log(div(10, 2))

// consoletest()