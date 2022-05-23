function solution(numbers) {
    numbers.sort((a, b) => parseInt("" + b + a) - parseInt("" + a + b));
    return (numbers[0] === 0) ? "0" : numbers.join("");
}