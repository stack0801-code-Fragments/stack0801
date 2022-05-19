function solution(expression) {
    const list = [];
    const operator = ['+', '-', '*'];
    
    let str = "";
    for(let i = 0; i < expression.length; i++) {
        for(let o of operator) {
            if(expression[i] === o) {
                list.push(parseInt(str));
                list.push(o);
                str = "";
                i++;
                break;
            }
        }
        str += expression[i];
    }
    list.push(parseInt(str));
    
    const calculate = (operator, arr) => {
        for(let o of operator) {
            for(let i = 1; i < arr.length; i += 2) {
                if(o === arr[i]) {
                    let buff = (o === '+') ? arr[i - 1] + arr[i + 1] :
                            (o === '-') ? arr[i - 1] - arr[i + 1] :
                                        arr[i - 1] * arr[i + 1];
                    arr.splice(i - 1, 3, buff);
                    i -= 2;
                }
            }
        }
        return arr[0];
    }
    
    let max = 0;
    const get_max = (n) => {
        if(n < 0)
            n *= -1;
        if(n > max)
            max = n;
    }
    
    get_max(calculate(['+', '-', '*'], list.slice()));
    get_max(calculate(['+', '*', '-'], list.slice()));
    get_max(calculate(['-', '+', '*'], list.slice()));
    get_max(calculate(['-', '*', '+'], list.slice()));
    get_max(calculate(['*', '+', '-'], list.slice()));
    get_max(calculate(['*', '-', '+'], list.slice()));
    
    return max;
}