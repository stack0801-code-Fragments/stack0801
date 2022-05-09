function solution(numbers, target) {
    let answer = 0;
    let flag = Array(numbers.length).fill(0);   // flag 테이블

    const DFS = (floor) => {                    // DFS
        if(floor < 0) {                         // 탐색 바닥에서 값 계산후 target 이면 answer++
            let sum = 0;
            for(i in numbers)
                sum += numbers[i] * (flag[i] ? 1 : -1);
            if(sum === target)
                answer++;
            return;
        }
        flag[floor] = 0;
        DFS(floor - 1);
        flag[floor] = 1;
        DFS(floor - 1);
    }

    DFS(numbers.length - 1);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));