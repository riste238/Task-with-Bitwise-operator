
// Work with bitwise & operator;

let n = 10;
const hammingWeight = n => {
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++;
    }
    return count;
}
let result = hammingWeight(n);
console.log(result)  // output 2;
