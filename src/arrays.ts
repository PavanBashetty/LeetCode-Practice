/*
1. 
Given an integer array nums, return true if any value appears to least twice in the array, and return false
if every element is distinct.
e.g: nums:number = [1,2,3,1]; // true
     nums:number = [1,2,3,4]; // false
*/

export function containsDuplicate(arr:number[]):boolean{
    type Tally = {
        [num:number]:number;
    }

    let tally: Tally = {};
    for(let a of arr){
        if(tally[a]) return true;
        tally[a] = 1;
    }
    return false
}

    // OR

export function containsDuplicateTwo(arr:number[]):boolean{
    const uniqueNum = new Set<number>(arr);
    return uniqueNum.size < arr.length
}

/**
 * 2. Given an array of integers nums and an integer target, retun indices of the two numbers such that they add
 * up to target.
 * e.g: nums:number = [2,7,11,15]; target = 9; output = [0,1]
 */

export function targetMarch(nums:number[], target:number):number[]{
    let output:number[] = [];

    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if(i == j) continue
            if(nums[i] + nums[j] == target){
                output.push(i);
                output.push(j)
                return output
            }
        }
    }
    return output
}
        // OR

export function targetMarchTwo(nums:number[], target:number):number[]{
    const complements = new Map<number, number>();
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(complements.has(complement)){
            return [complements.get(complement)!, i]
        }
        complements.set(nums[i],i);
    }
    return [];
}

/**
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    Notice that the solution set must not contain duplicate triplets.
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
 */

export function threeSum(nums:number[]):number[][]{
    const triplets:number[][] = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let l = i+1;
        let r = nums.length - 1;
        while(l<r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum < 0){
                l++;
            }else if(sum>0){
                r--;
            }else{
                triplets.push([nums[i], nums[l], nums[r]]);
                l++;
                while(l<r && nums[l] === nums[l-1]) l++;
            }
        }
        
    }
    return triplets
}

/*
 * You are given an integer array nums consisting of n elements, and an integer k.
    Find a contiguous subarray whose length is equal to k that has the maximum average value 
    and return this value. Any answer with a calculation error less than 10-5 will be accepted.
    Example 1:
        Input: nums = [1,12,-5,-6,50,3], k = 4
        Output: 12.75000
        Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 */


export function findMaxAverage(nums:number[], k:number):number{
    let sum:number = 0;
    for(let i=0;i<k;i++){
        sum += nums[i]
    }
    let maxSum = sum;
    for(let i=k; i<nums.length;i++){
        sum += nums[i] - nums[i-k];
        if(sum>maxSum){
            maxSum = sum
        }
    }
    return maxSum / k    
}

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock. Return the maximum profit you can achieve from 
this transaction. If you cannot achieve any profit, return 0.
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

export function maxProfit(prices:number[]):number{
    let output:number = 0;
    let minPrice = prices[0]

    for(let i=0; i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }
        const profit = prices[i] - minPrice;
        if(profit>output){
            output = profit;
        }
    }
    
    return output
}


/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 */

export function longestCommonPrefix(strs:string[]):string{
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return ''; 
        }
    }
    return prefix;
}