// Given arr = [1,-2,3,4,-5,-4,3,2,1], 
// range = [[1,3],[0,4],[6,8]]
// should return 6

// calculation process:
// range[1,3] = arr[1]+arr[2]+arr[3] = 5
// range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
// range[6,8] = arr[6]+arr[7]+arr[8] = 6
// So the maximum sum value is 6

function maxSum(arr, range) {
  var sum = 0,
    start,
    end,
    pair = [],
    max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < range.length; i++) {
    sum = 0;
    pair = range[i];
    start = pair[0];
    end = pair[1];

    for (let j = start; j <= end; j++) {
      sum += arr[j];
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8],]));
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]));
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 4], [2, 5]]));
console.log(maxSum([42500, 58217, 8477, 34257, 58367, 78234, 37973, -83676, -36610, 50469, 45279, 71550, 83264, -72360, -40929, 28329, -87539, 25767, -88468, -50573, -77689, 66620, 30143, 67213, 68238, 6396, 83028, 79510, -88861, -41633, 21447, 37492, -78845, -97867, 38461, 16764, -56648, -69822, -64355, -17333, -19148, 52158, 35012, -78771, -68374, 45306, 77625, 79756, -50329, 91002, -56765, -16893, -86436, -58965, 89819, 76665, -32120, -59168, 2363, 89376, -37534, 5283, -53469, -27927, 64222, 60750, -36695, 62181, 64966, 47988], [[11, 27], [2, 55], [10, 43], [15, 52], [2, 60], [26, 40]]));

