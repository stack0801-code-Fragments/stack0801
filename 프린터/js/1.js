function solution(priorities, location) {
    const get_max_arr = (arr) => {
        let max = 0;
        for(n of arr) {
            if(n > max)
                max = n;
        }
        return max;
    }
    
    let max = get_max_arr(priorities);
    let count = 0;

    while(true) {
        let n = priorities.shift();

        if(n === max) {
            count++;
            if(location === 0)
                return count;
            max = get_max_arr(priorities);
        }
        else 
            priorities.push(n);

        if(location-- == 0)
            location += priorities.length;
    }
}