/*Seating Arrangements
There are n guests attending a dinner party, numbered from 1 to n. The ith guest has a height of arr[i-1] inches.
The guests will sit down at a circular table which has n seats, numbered from 1 to n in clockwise order around the table. As the host, you will choose how to arrange the guests, one per seat. Note that there are n! possible permutations of seat assignments.
Once the guests have sat down, the awkwardness between a pair of guests sitting in adjacent seats is defined as the absolute difference between their two heights. Note that, because the table is circular, seats 1 and n are considered to be adjacent to one another, and that there are therefore n pairs of adjacent guests.
The overall awkwardness of the seating arrangement is then defined as the maximum awkwardness of any pair of adjacent guests. Determine the minimum possible overall awkwardness of any seating arrangement.
Signature
int minOverallAwkwardness(int[] arr)
Input
n is in the range [3, 1000].
Each height arr[i] is in the range [1, 1000].
Output
Return the minimum achievable overall awkwardness of any seating arrangement.
Example
n = 4
arr = [5, 10, 6, 8]
output = 4
If the guests sit down in the permutation [3, 1, 4, 2] in clockwise order around the table (having heights [6, 5, 8, 10], in that order), then the four awkwardnesses between pairs of adjacent guests will be |6-5| = 1, |5-8| = 3, |8-10| = 2, and |10-6| = 4, yielding an overall awkwardness of 4. It's impossible to achieve a smaller overall awkwardness.
*/

// Add any extra import statements you may need here


// Add any helper functions you may need here


function minOverallAwkwardness(arr) {
  // Write your code here
  const insert = (arr, position, value) => {
  return [...arr.slice(0, position), value, ...arr.slice(position)]
}

const permutation = (inputArr) => {
  let resArr = [];

  for (let i=0; i< inputArr.length; i++) {
    if (resArr.length === 0) {
      resArr.push([inputArr[i]])
    } else {
      let tmpArr = [];

      while (resArr.length > 0) {
        let subarr = resArr.pop();

        for (let time=0; time<subarr.length+1; time++) {
          tmpArr.push(insert(subarr, time, inputArr[i]))
        }
      }

      resArr = [...tmpArr]
    }
  }

  return resArr;
}

function minOverallAwkwardness(arr) {
  const arrs = permutation(arr);
  let tracking = [];

  for (let arr of arrs) {
    let max = Math.abs(arr[0]-arr[arr.length-1]);

    for (let index=0; index < arr.length-1; index++) {
      max = Math.max(max, Math.abs(arr[index] - arr[index+1]))
    }

    tracking.push(max);
  }
  // console.log('tracking', tracking)

  return tracking.sort((a,b) => a-b).shift();
}
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [5, 10, 6, 8];
var expected_1 = 4;
var output_1 = minOverallAwkwardness(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2, 5, 3, 7];
var expected_2 = 4;
var output_2 = minOverallAwkwardness(arr_2);
check(expected_2, output_2);

// Add your own test cases here
