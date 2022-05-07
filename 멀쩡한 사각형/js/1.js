function solution(w, h) {
    let max = 1;
    const get_max = (n) => {    // 최대값 구하기
        if(n > max)
            max = n;
    }
    const small = w > h ? h : w;
    const big = w > h ? w : h;
    
    for(let i = 1; i * i < small; i++) {    //공약수 구하기
        if(small % i == 0 && big % i == 0) {
            get_max(i)
            if(big % (small / i) == 0)
                get_max(small / i)
        }
    }
    
    return w * h - w - h + max;             // 전체 사각형에서 가로 + 세로 + 최대공약수를 뺌
}

console.log(solution(8, 12));

//1. n^2
//2. n
//3. n^(1/2)