var cal = 'casio';
console.log("cal is", cal);
function caluclator(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            return a / b;
        default:
            return "invalid operation";
    }
}
console.log("Additon is", caluclator('add', 6,3));
console.log("substraction is ", caluclator('sub', 5,3));
console.log("multiplication is", caluclator('mul',8,4));
console.log("division is", caluclator('div', 9,2));
console.log("invalid operation is", caluclator('mod',5,2));