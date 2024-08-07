let headerMessage:string = "LeetCode Problems";
let header = document.createElement("h1");
header.textContent = headerMessage;
header.style.textAlign = "center";

document.body.append(header)

// -----------------------------------------------
import * as ArrayFunctions from './arrays';

console.log(ArrayFunctions.maxProfit([7,6,4,3,1,9])); //8
console.log(ArrayFunctions.containsDuplicate([1,2,3,1])); //true
console.log(ArrayFunctions.targetMarch([2,7,11,15],9)); //[0,1]
console.log(ArrayFunctions.threeSum([-1,0,1,2,-1,-4])); //[[-1,-1,2],[-1,0,1]]
console.log(ArrayFunctions.findMaxAverage([1,12,-5,-6,50,3], 4)); //12.75

// -----------------------------------------------
import * as StringFunctions from './strings';
console.log(StringFunctions.isAnagram("anagram","nagaram")); //true
console.log(StringFunctions.isPalindrome("pavan")); //false
console.log(StringFunctions.lengthOfLongestSubstring("abcabcbb")); //3

// -----------------------------------------------
import * as NumberFunctions from './numbers';
console.log(NumberFunctions.isNumPalindrome(-121)); //false
console.log(NumberFunctions.romanToInt('IV')); //4

