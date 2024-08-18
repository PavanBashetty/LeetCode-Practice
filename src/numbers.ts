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

/**
35. Search Insert Position
*/

export function searchInsert(nums:number[],target:number):number{ //nums = [1,3,5,6], target = 4
    for(let i=1;i<=nums.length;i++){
        if(target < nums[0]) return 0
        if(nums[i-1] == target) return i-1
        if(nums[i-1] !== target && target > nums[i-1] && target < nums[i]) return i
        if(i == nums.length) return i
    }
    return 0
}

/**
 * 66. Plus One
 */
export function plusOne(digits:number[]):number[]{
    // let arrToInt:number = Number(digits.reduce((sum, currValue)=>sum+currValue,'')) + 1;
    // return arrToInt.toString().split('').map(Number)
    for(let i=digits.length-1; i>=0;i--){
        if(digits[i] < 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
}

/**
 * 69. Sqrt(x)
 */
export function mySqrt(x: number): number {
    if(x<2) return x;

    let left = 1;
    let right = x;
    while(left<=right){
        const mid = Math.floor(left + (right-left)/2);
        const square = mid * mid;

        if(square === x){
            return mid;
        }else if(square < x){
            left = mid + 1
        }else{
            right = mid -1
        }
    }

    return right
};

/**
 * 70. Climbing Stairs
 */

export function climbStairs(n: number): number {
    if (n <= 2) return n;

    let oneStepBefore = 2;
    let twoStepsBefore = 1;
    let allWays = 0;

    for (let i = 3; i <= n; i++) {
        allWays = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = allWays;
    }
    return allWays;
};
