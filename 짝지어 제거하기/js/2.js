function solution(s)
{
    let stack = [];             // 스택을 이용

    if(s.length % 2 !== 0)      // s의 길이가 홀수면 return 0
        return 0;
    
    for(si of s) {
        if(stack[stack.length - 1] === si)  //스택에 가장 위가 넣으려는 값과 같으면
            stack.pop();                    // pop
        else
            stack.push(si);                 // 아니면 push
    }

    return stack.length == 0 ? 1 : 0;       // stack이 비어있으면 1 아니면 0
}

console.log(solution("baabaa"));