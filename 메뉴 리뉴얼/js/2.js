function solution(orders, course) {
    const answer = []
    const list = []
    orders = orders.map(order => order.split('').sort())
    course.map(c => list[c] = {})
    orders.map(order => {
        let count = Math.pow(2, order.length)
        while(--count > 2) {
            let str = ''
            for(let i = 0; i < order.length; i++) {
                if(count & Math.pow(2, order.length - i - 1))
                    str += order[i]
            }
            if(list[str.length])
                !list[str.length][str] ? list[str.length][str] = 1 : list[str.length][str] += 1
        }
    })
    list.map(layer => {
        let max = 0
        for(let i in layer) {
            if(layer[i] > max)
                max = layer[i]
        }
        for(let i in layer) {
            if(layer[i] == max && max > 1)
                answer.push(i)
        }
    })
    return answer.sort()
}

console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))