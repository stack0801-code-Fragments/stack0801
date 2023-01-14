function solution(numbers) {
    numbers.sort((a, b) => {
        if(parseInt("" + a + b) > parseInt("" + b + a))
            return -1;
        return 1;
    });
    for(let i = 0; i < numbers.length - 1; i) {
        if(numbers[i] === 0)
            numbers.shift();
        else {
            break;
            i++;
        }
    }
    return numbers.join("");
}