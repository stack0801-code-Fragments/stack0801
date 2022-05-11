function solution(p) {
    p = p.split("").map(x => x === "(" ? 1 : -1)
    const loop = (arr) => {
        if(arr.length === 0)
            return [];
        let u, 
            v, 
            check = true, 
            buff = 0;
        for(i in p) {
            buff += arr[i];
            if(buff < 0)
                check = false;
            else if(buff == 0) {
                u = arr.slice(0 , ++i);
                v = arr.slice(i);
                break;
            }
        }
        if(!check) {
            u.shift();
            u.pop();
            u = u.map(x => x * -1);
            return [1, ...loop(v), -1, ...u];
        }
        return [...u, ...loop(v)];
    }
    return loop(p).map(x => x === 1 ? "(" : ")").join("");
}

console.log(solution(")()()()("))