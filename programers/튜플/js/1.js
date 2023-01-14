function solution(s) {
    const answer = [];
    const list2 = {};
    const list = [];
    let group = [];
    let num = "";
    
    for(let i = 2; i < s.length; i++) {
        if(s[i] === '}') {
            group.push(parseInt(num));
            num = "";
            list.push(group);
            group = [];
            i += 2;
        }
        else if(s[i] === ',') {
            group.push(parseInt(num));
            num = "";
        }
        else
            num += s[i];
    }
    
    list.sort((a, b) => a.length - b.length);
    
    for(let i of list) {
        for(let j of i) {
            if(!list2[j]) {
                list2[j] = 1;
                answer.push(j)
            }
        }
    }
    
    return answer;
}