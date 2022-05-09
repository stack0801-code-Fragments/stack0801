function solution(orders, course) {
    const answer = []
    const list = {}
    course.map(c => list[c] = {})                   // 코스에 따라 list 분류
    orders.map(order => {                           // order 에 따라 맞는 코스 경우의 수
        order = order.split('').sort()              // order 를 배열로
        let count = Math.pow(2, order.length)       // 이진법을 이용 ex) 00001(2) ~ 11111(2) 
        while(--count > 2) {
            let str = ""
            for(let i in order) {
                if(count & Math.pow(2, order.length - i - 1))
                    str += order[i]
            }
            if(list[str.length])                    // 효율을 위해 원하는 코스만 저장
                list[str.length][str] ? list[str.length][str] += 1 : list[str.length][str] = 1
        }
    })
    for(let i in list) {                            // 코스에서 가장 많이 시킨거 answer 에 추가
        let max = 1
        for(let j in list[i]) {
            if(list[i][j] > max)
                max = list[i][j]
        }
        for(let j in list[i]) {
            if(list[i][j] == max && max > 1)
                answer.push(j)
        }
    }
    return answer.sort()
}