function solution(orders, course) {                     // 이거 개똥 코드임 왜 통과해버렸는지 모르겠음
    let list = {}
    orders.map((order, i) => orders[i] = order.split('').sort().join(''))
    orders.map((order1, i1) => {
        orders.map((order2, i2) => {
            if(i1 != i2) {
                let obj = intersection(order1, order2)
                for (let i in obj)
                    (list[i] == undefined) ? list[i] = obj[i] : list[i] += obj[i]
            }
        })
    })
    return courses_n(list, course)
}

function courses_n(list, course) {
    let answer = []
    let keys = Object.keys(list)
    let max

    course.map((n) => {
        max = 0
        keys.map((k) => {
            if(k.length != n)
                return
            if(list[k] > max)
                max = list[k]
        })
        keys.map((k) => {
            if(list[k] == max && k.length == n)
                answer.push(k)
        })
    })

    return answer.sort()
}

function intersection(str1, str2) {
    let list = []
    for(c1 of str1) {
        for(c2 of str2) {
            if(c1 == c2) 
                list.push(c1)
        }
    }
    result = {}
    tree(list, list.length, '', result)
    return result
}

function tree(list, n, arr, result) {
    if(arr.length > 1)
        result[arr] = 1
    if(n == 0)
        return
    tree(list, n - 1, arr + list[list.length - n], result)
    tree(list, n - 1, arr, result)
}

// +7