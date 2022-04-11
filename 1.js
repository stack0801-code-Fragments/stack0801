function solution(numbers, hand) {
    let answer = '';
    
    let left = 10
    let right = 12
    
    for(let num of numbers) {
        
        if(num == 0)
            num = 11
        
        let column = num % 3
        
        if(column == 1) {
            answer += 'L'
            left = num
        }
        else if(column == 0) {
            answer += 'R'
            right = num
        }
        else if(column == 2) {
            const distance_L = distance(left, num)
            const distance_R = distance(right, num)
            
            if(distance_L < distance_R) {
                answer += 'L'
                left = num
            }
            else if(distance_L > distance_R) {
                answer += 'R'
                right = num
            }
            else if (distance_L == distance_R) {
                if(hand == "left") {
                    answer += 'L'
                    left = num
                }
                else if (hand == "right") {
                    answer += 'R'
                    right = num
                }
            }
        }
            
    }
    return answer;
}

function distance(n1, n2) {
    return Math.abs((n1 - 1) % 3 - (n2 - 1) % 3) + Math.abs(parseInt((n1 - 1) / 3) - parseInt((n2 - 1) / 3))
}

