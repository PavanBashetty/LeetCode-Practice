/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

export function isPalindrome(s:string):boolean{
    let count:number = 0;
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i=0; i<s.length;i++){
        if(s[i] == s[s.length - 1 - i]){
            count++
        }
    }
    return count == s.length ? true:false
}

/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true
 */

export function isAnagram(s:string, t:string):boolean{
    let remainingLettersS:string[] = s.split('');

    for(let letter of t){
        let sIndex = remainingLettersS.findIndex(l => l === letter);
        if(sIndex<0) {
            return false
        }
        remainingLettersS.splice(sIndex,1);
    }
    return remainingLettersS.length === 0
}

/**
 * Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

export function lengthOfLongestSubstring(s:string):number{
    let subStringArr:string[] = []
    let longestSubStringLength = 0;

    for(let char of s){
        const charIndex = subStringArr.indexOf(char);

        if(charIndex>=0){
            subStringArr.splice(0, charIndex+1);
        }

        subStringArr.push(char);
        longestSubStringLength = Math.max(longestSubStringLength, subStringArr.length)
    }
    return longestSubStringLength;
}

/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

export function isValid(s: string): boolean { 
    let stack:string[] = []
    const bracketMap: {[key:string]:string} = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    
    for(const char of s){
        if(char in bracketMap){
            let openBracket = stack.pop();
            if(openBracket !== bracketMap[char]){
                return false
            }
        }else{
            stack.push(char);
        }
    }
    return stack.length == 0
};

/**
 * 28. Find the Index of the First Occurrence in a String
 */
export function strStr(haystack: string, needle: string): number {
    if(needle.length>haystack.length) return -1
    for(let i=0;i<haystack.length;i++){
        if(haystack.slice(i,needle.length+i) == needle){
            return i
        }
    }
    return -1
};