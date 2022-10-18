/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(maxOfTwoNumbers(20, 7));

// // maxOfThree();

// /*
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// */
maxOfThree = (a, b, c) => {
    return Math.max(a, b, c)
}
console.log(maxOfThree(45, 88, 32))
// /*
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// //"aeiou".includes(letter) */

isCharacterAVowel = (letter) => {
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        return true;
    } else {
        return false;
    }

    // };
    // console.log(isCharacterAVowel('I'));
    // /*
    // 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
    // */

    sumArray = (array) => {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum;

    };
    // console.log(sumArray([1, 2, 3, 4]))

    multiplyArray = (array) => {
        var sum = 1;
        for (var i = 0; i < array.length; i++) {
            sum = sum * array[i];
        }
        return sum;
    }
    console.log(multiplyArray([1, 2, 3, 4]))
    /*
    5.Write a function that returns the number of arguments passed to the function when called.
    */
    const returnArg = () => {
        return arguments.length;
    }
    console.log(returnArg('what', 'will', 'we', 'get', 'jui', 'yhgfrrdfs'));
    /*
    6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
    */

    reverseString = (x) => {
        x = x + "";
        return x.split('').reverse().join('');
    };
    console.log(reverseString('My bologna has a first name'));

    // /*
    // 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
    // */
    findLongestWord = (arr) => {
        let word = '';
        for (let i = 0; i < arr.length; i++) {
            if (word.length < arr[i].length) {
                word = arr[i];
            }
        }
        return word;
    };
    console.log(findLongestWord(['Computer', 'its', 'hamburgers', 'roses', 'hello']));
    /*
    8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
    */
    //step1:start a loop (and get the index)
    //setp2:if statement to check if word is longer than num
    //step3: if YES, push word to new array
    //step4: return new ayrray

    myArr = ['arr', 'longestwordishelloworldwhatarewedoing', 'shortword']

    findLongestWord = (myarray) => {
        // ADD YOUR CODE HERE
        let longestWord = ''
        for (var i = 0; i < myarray.length; i++) {
            if (myarray[i].length > longestWord.length) {
                longestWord = myarray[i]
            }

        }
        return longestWord.length
    }
    console.log(findLongestWord(myArr);
