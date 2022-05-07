rows = 3
columns = 3
queries = [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]

console.log(solution(rows, columns, queries))

function solution(rows, columns, queries) {
    const answer = []
    let list = {}
    let buff
    let min

    const rotate = (count, x, y, dx, dy) => {
        for(let i = 0; i < count; i++) {
            const a = (y + dy * (i - 1) - 1) * columns + x + dx * (i - 1)
            const b = (y + dy * i - 1) * columns + x + dx * i
            const c = list[b] != undefined ? list[b] : b
        
            if(c < min)
                min = c

            buff[a] = c
        }
    }
    for(let query of queries) {
        buff = {}
        min = query[2] * columns + query[3]

        rotate(query[2] - query[0], query[3], query[2] - 1, 0, -1)
        rotate(query[3] - query[1], query[3] - 1, query[0], -1, 0)
        rotate(query[2] - query[0], query[1], query[0] + 1, 0, 1)
        rotate(query[3] - query[1], query[1] + 1, query[2], 1, 0)

        list = { ...list, ...buff }
        answer.push(min)
    }
    return answer
}