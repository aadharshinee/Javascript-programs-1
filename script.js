    //1st program
/*for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
} */

    //2nd program
 /*   function isPalindrome(str) {

        let j = str.length - 1
    
        for (let i = 0; i < str.length / 2; i++) {
    
            if (str[i] != str[j]) {
    
                return false;
    
            }
    
            j--;
    
        }
    
        return true;
    }
     
    
    let str1 = "malayalam";
    
    let str2 = "mom";
    
    let str3 = "hello";
     
    console.log(isPalindrome(str1));
    console.log(isPalindrome(str2));
    console.log(isPalindrome(str3));
*/

    //3rd program 

/* function findLargestNumber(numbers) 
    {
        if (numbers.length === 0) 
        {
            console.log("Array is empty")
        }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) 
    {
        if (numbers[i] > largest) 
        {
            largest = numbers[i];
        }
    }
    return largest;
}
const array = [10, 5, 8, 12, 3];
const largestNumber = findLargestNumber(array);
console.log("The largest number is:", largestNumber);
*/

    //4th program
/*function countCharacterOccurrences(str) 
{
    var charCount = {};
        for (var i = 0; i < str.length; i++) 
        {
            var ch = str[i];
            if (charCount[ch]) 
            {
                charCount[ch]++;
            } else 
            {
                charCount[ch] = 1;
            }
        }
        return charCount;
}
var string = "hello world";
console.log(countCharacterOccurrences(string));
*/

    //5th program
/* function findLongestWord(str) 
{
    const words = str.split(' ');
    let longestWord = '';
    for (let word of words) 
    {
        if (word.length > longestWord.length) 
        {
            longestWord = word;
        }
    }
    return longestWord;
}
const sentence = "The moon is so beautiful";
const longestWord = findLongestWord(sentence);
console.log(longestWord); 
*/

    //6th program
/* function factorial(n) 
{
    if (n === 0) 
    {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= n; i++) 
    { 
        result *= i;
    }
    return result;
}
var num = 4;
    console.log("The factorial of " + num + " is " + factorial(num)); 
*/

    //7th program
/* function cf(c) 
    {
        var f = (c * 9 / 5) + 32;
        return f;
    }
var c = 16;
var f = cf(c);
console.log(c + " degrees Celsius is equal to " + f.toFixed(2) + " degrees Fahrenheit.");
*/

    //8th program 
function missnum(num) 
{
    var n = num.length;
    var sum = (n * (n + 1)) / 2;
    var sum1 = num.reduce((acc, num) => acc + num, 0);
    var missnum = sum - sum1;
    return missnum;
}
var num = [3, 0, 1 ];
console.log("The missing number is:", missnum(num));

