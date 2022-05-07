console.log(solution(25, [2, 14, 11, 21, 17], 2))

function solution(distance, rocks, n) {

    rocks.sort((a, b) => a - b)
    rocks.push(distance)
    rocks.unshift(0)

    rocks = rocks.map((e, i) => rocks[i] - rocks[i - 1])
    rocks.shift()

    let left = 1
    let right = distance
    let mid = (left + right) / 2
    mid -= mid % 1

    let count
    let old

    while(1 < right - left) {
        old = 0
        count = 0

        for(d of rocks) {
            old += d
            if(old < mid)
                count++
            else
                old = 0
        }

        if(count > n)
            right = mid
        else
            left = mid
        
        mid = (left + right) / 2
        mid -= mid % 1
    }
    return min
}