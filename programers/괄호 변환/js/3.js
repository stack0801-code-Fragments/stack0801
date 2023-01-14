function solution(p) {
    p = p.split("").map(x => x === "(" ? 1 : -1)
    let answer = []
    const loop = (start) => {
        if(start === p.length)
            return;
        let i = start,
            check = 0;
        do {
            check += p[i++];
        } while(check !== 0)
        loop(i);
        if(p[start] === 1)
            answer = p.slice(start, i).concat(answer)
        else
            answer = [1].concat(answer, -1, p.slice(start + 1 , i - 1).map(x => x * -1))
    }
    loop(0)
    return answer.map(x => x === 1 ? "(" : ")").join("");
}

console.log(solution("(()())()"))