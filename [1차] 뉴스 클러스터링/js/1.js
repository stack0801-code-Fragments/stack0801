function solution(str1, str2) {
    str1 = str1.split("").map(x => x >= 'a' ? String.fromCharCode(x.charCodeAt() - 32) : x);
    str2 = str2.split("").map(x => x >= 'a' ? String.fromCharCode(x.charCodeAt() - 32) : x);
    
    let list1 = {}
    let list2 = {}
    
    const combine = (str, list) => {
        for(let i = 0; i < str.length - 1; i ++) {
            if(str[i] >= 'A' && str[i] <= 'Z' && str[i + 1] >= 'A' && str[i + 1] <= 'Z') {
                if(list[str[i] + str[i + 1]])
                    list[str[i] + str[i + 1]]++;
                else
                    list[str[i] + str[i + 1]] = 1;
            }
        }
    }
    combine(str1, list1);
    combine(str2, list2);
    
    let length1 = 0;
    let length2 = 0;
    let count = 0
    for(let c in list1) {
        if(list2[c] !== undefined)
            count += list2[c] > list1[c] ? list1[c] : list2[c];
        length1 += list1[c]
    }
    for(let c in list2)
        length2 += list2[c]
    
    if(length1 + length2 === 0)
        return 65536;
    return parseInt(count / (length1 + length2 - count) * 65536);
}