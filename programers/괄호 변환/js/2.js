function solution(p) {
    p = p.split("").map(x => x === "(" ? 1 : -1)
    const loop = (arr) => {
        if(arr.length === 0)
            return [];
        let i = 0,
            check = 0;
        do {
            check += arr[i++];
        } while(check !== 0)
        if(arr[0] === -1)
            return [1, ...loop(arr.slice(i)), -1, ...arr.slice(1 , i - 1).map(x => x * -1)];
        return [...arr.slice(0 , i), ...loop(arr.slice(i))];
    }
    return loop(p).map(x => x === 1 ? "(" : ")").join("");
}

console.log(solution("()))((()"))