function solution(w, h) {
    const gcd = (a, b) => {                 //유클리드 호제법
        return b === 0 ? a : gcd(b, a % b);
    };
    
    return w * h - w - h + gcd(w, h);       // 전체 사각형에서 가로 + 세로 + 최대공약수를 뺌
}

console.log(solution(8, 12));
//지식이 늘었다