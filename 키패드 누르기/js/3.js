function solution(numbers, hand) {
    const my_hand = [10, 12]
    return numbers.map(v => {
        if(v == 0) v = 11
        const column = v % 3
        const result = (column == 1) ? 0 : (column == 0) ? 1 : (() => {
            const [distance_L, distance_R] = my_hand.map(h => Math.abs(Math.floor((h - 1) / 3) - Math.floor((v - 1) / 3)) + Math.abs(h - v) % 3)
            return (distance_L < distance_R) ? 0 : (distance_L > distance_R) ? 1 : (hand == "left") ? 0 : 1
        })()
        my_hand[result] = v
        return ['L', "R"][result]
    }).join("");
}