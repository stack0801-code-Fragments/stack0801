function solution(priorities, location) {
    let p_sort = priorities.slice().sort((a, b) => b - a);
    let count = 0;

    while(true) {
        let n = priorities.shift();

        if(n === p_sort[0]) {
            count++;
            if(location === 0)
                return count;
            p_sort.shift();
        }
        else 
            priorities.push(n);

        if(location-- == 0)
            location += priorities.length;
    }
}