function solution(s)
{
    let stack = [];
    
    for(si of s)
        stack[stack.length - 1] === si ? stack.pop() : stack.push(si);

    return stack.length == 0 ? 1 : 0;
}

console.log(solution("baabaa"));

// 삼항식이 더 느림???