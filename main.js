const sumOfSquares = (n) => {
    let result = 0;

    for (let index = 1; index <= n; index++) {
        result += index * index;        
    }
    
    return result;
}

const squaresOfSum = (n) => {
    let sum = 0;

    for (let index = 1; index <= n; index++) {
        sum += index;
    }

    return sum * sum;
}

const sumSquareDifference = (n) => squaresOfSum(n) - sumOfSquares(n);

console.log(sumSquareDifference(10));