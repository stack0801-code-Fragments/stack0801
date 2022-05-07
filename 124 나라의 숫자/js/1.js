function solution(n) {
    let answer = [];
    let numbers = [1, 2, 4];
    
    while (n > 0) {
        answer.unshift(numbers[(n - 1) % 3]);
        n = parseInt((n - 1) / 3);
    }
    
    return answer.join('');
}

//3진법인줄 알았는데 아니었음
//직접 나눠보면서 규칙을 찾음

for (let index = 1; index < 30; index++) {
    console.log(solution(index));
}
