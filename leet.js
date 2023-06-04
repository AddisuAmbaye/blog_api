function maxNonContiguousSubarraySum(arr) {
    incl = 0;
    excl = 0;
 
   for (let i = 0; i < arr.length; i++) {
     temp = incl;
     incl = Math.max(excl + arr[i], incl);
     excl = temp;
   }
 
   return incl;
 }
 
 // Example usage:
  arr = [2, -4, 6, -3, 9];
  maxSum = maxNonContiguousSubarraySum(arr);
  console.log(maxSum); 
 // Output: 8