const path = require('path');

module.exports = {
    dir: () => {
        console.log("디렉토리 =========> ");
        console.log(__dirname);
        console.log()
    },
    filepath: () => {
        console.log("파일 전체 경로 =========> ");
        console.log(__filename);
        console.log()
    },
    filename: () => {
        console.log("파일명 얻기 =========> ");
        console.log(__filename);
        const index = __filename.lastIndexOf("\\")
        console.log(index)
        const name = __filename.substring(index+1, __filename.length)
        console.log(name)
        console.log()
    },
    path: () => {
        console.log("path 모듈 이용하기 =========> ");
        console.log("root dir => " + path.dirname(__filename))
        console.log("root ext => " + path.extname(__filename))
        console.log()

        console.log("parse() 함수 이용하기 =========> ");
        const file = path.parse(__filename);
        console.log("root dir => " + file.root)
        console.log("full path => " + file.dir)
        console.log("file full name => " + file.base)
        console.log("file name => " + file.name)
        console.log("file ext => " + file.ext)
        console.log()

        console.log("join() 함수 이용하기 =========> ");
        console.log("join => " + path.join("C:/", "test", "abc"))
        console.log("join => " + path.join("C:/", "test", "abc", ".."))
        console.log("join => " + path.join("C:/", "test", "..", "hana", "bank"))
    }
}