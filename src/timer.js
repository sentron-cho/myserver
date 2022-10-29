const Timer = {
    timeout: () => {
        setTimeout(() => {
            console.log('1.5초 후 실행');
        }, 1500)
    },

    interval: () => {
        setInterval(() => {
            console.log('1초 마다 실행');
        }, 1000);
    },

    clear: () => {
        const timer1 = setTimeout(() => {
            console.log('3초 후 실행');
        }, 3000)

        const timer2 = setInterval(() => {
            console.log('1초마다 실행 ---->');
        }, 1000);
        
        // 2초후에 실행되는 타이머를 만들고 설정한 타이머를 클리어(실행취소) 해보자.
        setTimeout(() => {
            console.log('2초 모든 타이머 삭제 ---->');

            // timeout2는 3초 후 실행되는데, 2초만에 취소했으므로 실행되지 않음
            clearTimeout(timer1);
            console.log('\ttimer1은 3초뒤 실행되기에 실행되지 못한다 ---->');

            // 1초마다 실행이 2번(2초) 반복된 후, 2.5초가 되면 취소되므로 이후로는 실행되지 않음
            clearInterval(timer2);
        }, 2000);
    },

    counter: () => {
        let count = 1;

        // 1초마다 타이머 발생
        const timer = setInterval(() => {
            console.log("타이머 ==== > " + count)

            // 카운트 값 증가
            count = count + 1;

            // 10초 후에 타이머 삭제
            if(count > 10) clearTimeout(timer)
        }, 1000);
    }
}

module.exports = Timer;
