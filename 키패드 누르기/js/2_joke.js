function solution(numbers, hand) {
    let answer = '', left = 10, right = 12, num
    const distance = (n1, n2) => (Math.abs(n1 - n2) % 3 ? 1 : 0) + Math.abs(Math.floor((n1 - 1) / 3) - Math.floor((n2 - 1) / 3))
    const set_hand = (h) => {
        (h == 'L') ? left = num : right = num
        answer += h
    }
    for(num of numbers) {
        if(!num) num = 11
        const column = num % 3
        set_hand(
            (column == 1) ? 'L' : (column == 0) ? 'R' : (() => {
                const distance_L = distance(left, num), distance_R = distance(right, num)
                return (distance_L < distance_R) ? 'L' : (distance_L > distance_R) ? 'R' : (hand == "left") ? 'L' : 'R'
            })()
        )
    }
    return answer
}
