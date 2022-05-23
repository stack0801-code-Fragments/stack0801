function solution(N, number) {
    let answer = -1;
    let list = [];
    
    for(let str = "" + N; str.length <= 8; str += N) {
        list[str.length - 1] = {};
        list[str.length - 1][str] = str.length;
        
        if(number === parseInt(str))
            return str.length;
    }
    
    const functions = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => b == 0 ? 0 : parseInt(a / b)
    ]
    
    for(let c = 2; c <= 8; c++) {
        for(let i = 1; i < c; i++) {
            for(a in list[i - 1]) {
                for(b in list[c - i - 1]) {
                    for(let f of functions) {
                        let buff = f(parseInt(a), parseInt(b));
                        if(buff === number)
                            return c;
                        list[c - 1][buff] = c;
                    }
                }
            }
        }
    }
    
    return answer;
}