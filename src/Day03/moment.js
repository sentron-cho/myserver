const moment = require("moment");

const Moment = {
    today: function() {
        console.log("today ===================>");
        
        // 현재 날짜
        console.log(moment());

        console.log("\n\n");
    },
    date: () => {
        console.log("date ===================>");
        
        // 특정 날짜 지정
        console.log(moment("2022-01-27", "YYYY-MM-DD"));
        
        console.log("\n\n");
    },
    format: () => {
        console.log("format ===================>");
        
        // 현재 날짜 형식 지정
        let date = moment();
        // let date = moment("2022-10-27");

        console.log("년-월-일 ==> " + date.format("YYYY-MM-DD"));
        console.log("시:분:초 ==> " + date.format("HH:mm:ss"));
        console.log("요일 ==> " + date.format("dddd"));
        console.log("년-월-일 요일 ==> " + date.format("YYYY-MM-DD dddd"));
        console.log("년-월-일 시:분:초 ==> " + date.format("YYYY-MM-DD HH:mm:ss"));
        console.log("년-월-일 요일 시:분:초 ==> " + date.format("YYYY-MM-DD dddd HH:mm:ss"));

        console.log("년-월-일 요일 시:분:초.밀리초 ==> " + date.format("YYYY-MM-DD dddd HH:mm:ss.SSS"));

        console.log("\n\n");
    },
    add: () => {
        console.log("add or subtract ========================>");
        
        // 날짜 더하기
        console.log(moment("2022-01-27").add(1, "days"));

        // 포맷을 같이 이용한다.
        console.log("년 더하기 => " + moment("2022-10-10 10:10:10").add(1, "years").format("YYYY-MM-DD HH:mm:ss"));
        console.log("월 더하기 => " + moment("2022-10-10 10:10:10").add(1, "months").format("YYYY-MM-DD HH:mm:ss"));
        console.log("일 더하기 => " + moment("2022-10-10 10:10:10").add(1, "days").format("YYYY-MM-DD HH:mm:ss"));
        console.log("시 더하기 => " + moment("2022-10-10 10:10:10").add(10, "hours").format("YYYY-MM-DD HH:mm:ss"));
        console.log("분 더하기 => " + moment("2022-10-10 10:10:10").add(10, "minutes").format("YYYY-MM-DD HH:mm:ss"));
        console.log("초 더하기 => " + moment("2022-10-10 10:10:10").add(10, "seconds").format("YYYY-MM-DD HH:mm:ss"));
        console.log("");

        // 날짜 빼기
        console.log("년 빼기 => " + moment("2022-10-10 10:10:10").add(-1, "years").format("YYYY-MM-DD HH:mm:ss"));
        console.log("월 빼기 => " + moment("2022-10-10 10:10:10").add(-1, "months").format("YYYY-MM-DD HH:mm:ss"));
        console.log("일 빼기 => " + moment("2022-10-10 10:10:10").add(-1, "days").format("YYYY-MM-DD HH:mm:ss"));
        console.log("시 빼기 => " + moment("2022-10-10 10:10:10").add(-10, "hours").format("YYYY-MM-DD HH:mm:ss"));
        console.log("분 빼기 => " + moment("2022-10-10 10:10:10").add(-10, "minutes").format("YYYY-MM-DD HH:mm:ss"));
        console.log("초 빼기 => " + moment("2022-10-10 10:10:10").add(-10, "seconds").format("YYYY-MM-DD HH:mm:ss"));
        console.log("");

        // 날짜 빼기(다른방법)
        console.log("년 빼기 => " + moment("2022-10-10 10:10:10").subtract(-1, "years").format("YYYY-MM-DD HH:mm:ss"));
        console.log("월 빼기 => " + moment("2022-10-10 10:10:10").subtract(-1, "months").format("YYYY-MM-DD HH:mm:ss"));
        console.log("일 빼기 => " + moment("2022-10-10 10:10:10").subtract(-1, "days").format("YYYY-MM-DD HH:mm:ss"));
        console.log("시 빼기 => " + moment("2022-10-10 10:10:10").subtract(-10, "hours").format("YYYY-MM-DD HH:mm:ss"));
        console.log("분 빼기 => " + moment("2022-10-10 10:10:10").subtract(-10, "minutes").format("YYYY-MM-DD HH:mm:ss"));
        console.log("초 빼기 => " + moment("2022-10-10 10:10:10").subtract(-10, "seconds").format("YYYY-MM-DD HH:mm:ss"));

        console.log("\n\n");
    },
    diff: () => {
        // 시간의 차이
        console.log("========== diff ==========");
        console.log("년 차이 => " + moment("2022-10-10").diff("2023-11-11", "years"));
        console.log("년 차이 => " + moment("2022-10-10").diff("2021-09-11", "years"));
        console.log("");

        console.log("월 차이 => " + moment("2022-10-10").diff("2022-11-12", "month"));
        console.log("월 차이 => " + moment("2022-10-10").diff("2022-09-01", "month"));
        console.log("");

        console.log("일 차이 => " + moment("2022-10-10").diff("2022-10-11", "days"));
        console.log("일 차이 => " + moment("2022-10-10").diff("2022-10-09", "days"));
        console.log("");

        console.log("시 차이 => " + moment("2022-10-10 10:10:10").diff("2022-10-12 10:10:10", "hours"));
        console.log("시 차이 => " + moment("2022-10-10 10:10:10").diff("2022-10-07 10:10:10", "hours"));
        console.log("");

        console.log("분 차이 => " + moment("2022-10-10 10:10:10").diff("2022-10-11 10:10:10", "minute"));
        console.log("분 차이 => " + moment("2022-10-10 10:10:10").diff("2022-10-09 10:10:10", "minute"));
        console.log("");
        
        console.log("초 차이 => " + moment("2022-10-10 10:10:10").diff("2022-10-10 10:10:20", "seconds"));
        console.log("초 차이 => " + moment("2022-10-10 10:10:10").diff("2022-10-10 10:10:00", "seconds"));

        console.log("\n\n");
    }
}

Moment.print = () => { console.log(123213) }

module.exports = Moment