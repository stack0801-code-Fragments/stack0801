function solution(numbers) {
    answer = 0;
    combine = {};
    
    const DSF = (str, list) => {
        if(str != '' && str[0] != '0')
            combine[str] = 0;
        for(let i = 0; i < list.length; i++) {
            const pivot = list.shift();
            DSF(str + pivot, list);
            list.push(pivot);
        }
    }
    numbers = numbers.split("");
    DSF("", numbers);
    
    for(let c in combine) {
        let nc = parseInt(c)
        for(let i = 2; i <= nc; i++) {
            if(i * i > nc) {
                answer += 1;
                break;
            }
            if(nc % i === 0)
                break;
        }
    }
    return answer;
}