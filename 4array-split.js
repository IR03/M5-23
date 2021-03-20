const nums = [1,2,3,4,5,6,7,8,9,10];
//const part = nums.slice(3,9);     //9-3 = 6 start point 3 count 6;

//(start point, how long count,inject)

const part = nums.splice(4,5,11); 

// console.log(part);
//  console.log(nums);

const together = nums.join("-");
//console.log(together);