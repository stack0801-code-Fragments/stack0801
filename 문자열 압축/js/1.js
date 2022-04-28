console.log(
    solution("ababcdcdababcdcd")
)

function solution(s) {
    let pre, 
        post, 
        str, 
        count, 
        answer = s

    for (let d = 1; d <= parseInt(s.length / 2); d++) {
        str = ''
        count = 1
        for (let i = 0; i < s.length; i += d) {
            post = s.slice(i, i + d)
            if(pre == post)
                count++
            else {
                if(count > 1) {
                    str += count
                    count = 1
                }
                str += post
                pre = post
            }
        }
        if(count > 1)
            str += count
        if(answer.length > str.length)
            answer = str
    }
    return answer.length
}