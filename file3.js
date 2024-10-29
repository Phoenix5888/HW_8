function analyzeArray(numbers)  {
    const sum = numbers.reduce((acc, num) => acc + num, 0) ;
    const average = sum/numbers.length;
    const min =Math.min(...numbers);
    const max =Math.max(...numbers);


    return {
        sum,
        average,
        min,
        max
    }
}

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }