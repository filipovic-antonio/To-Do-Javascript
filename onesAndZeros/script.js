const binaryArrayToNumber = arr => {
    const binary = arr.join('');
    console.log(binary);
    const binaryNumber = parseInt(binary, 2);
    console.log(binaryNumber);
    return binaryNumber;
}
const result = binaryArrayToNumber([0,0,1,0]);
console.log(result);