function solution(numbers, target) {
    let answer = 0;

    const DFS = (value, floor) => {
        if(floor < 0) {
            if(value === target)
                answer++;
            return;
        }
        DFS(value + numbers[floor], floor - 1);
        DFS(value - numbers[floor], floor - 1);
    }
    DFS(0, numbers.length - 1);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));

// 생각해보니 테이블 만들 필요 없음