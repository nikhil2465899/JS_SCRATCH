let number= 12345;
// Make function to reverse a number
function ReverseNumber(num){
 return Number(num.toString().split("").reverse().join(""));
}
const reversedNumber = ReverseNumber(number);
console.log(reversedNumber);

// Second logic using while loop
function reverseNumberBywhile(num){
    var reversedNumber = 0;
    while(num>0){
        var rem = num%10;
        reversedNumber = reversedNumber*10+rem;
        let remainingNumber = num/10;
    }

    return reversedNumber;
}
const reversedNum = ReverseNumber(number);
console.log(reversedNum);