function solution(progresses, speeds) {

    let answer = []
    let lately
    let day = 0
    
    for(let i in progresses) {
        lately = day
        while(progresses[i] + (day * speeds[i]) < 100)      //일이 완료될 때까지 day++
            day++
        if(lately == day)                                   //일이 이미 완료되어 있었으면 마지막 index + 1
            answer[answer.length - 1]++
        else                                                //day 를 추가해서 했으면 answer 에 1 push
            answer.push(1)
    }
    
    return answer
}

console.log(solution([93, 30, 55], [1, 30, 5]))