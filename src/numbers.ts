/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * Example 1:

Input: x = 121
Output: true

Input: x = -121
Output: false
 */

export function isNumPalindrome(x:number):boolean{
    let count:number = 0;
    let numS:string = x.toString();
    for(let i=0; i<numS.length;i++){
        if(numS[i] == numS[numS.length -1 - i]){
            count++
        }
    }
    return count == numS.length ? true:false    
}

/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 */

export function romanToInt(s:string):number{
    let total:number = 0;
    let prevValue:number = 0;
    let romanMap: {[key:string]:number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for(let i = s.length - 1; i >= 0; i--){
        const currValue = romanMap[s[i]];
        if(currValue<prevValue){
            total -= currValue
        }else{
            total += currValue
        }
        prevValue = currValue
    }
    return total
}
