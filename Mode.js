function findMode(arr) {
  const count = {};
  let mode = null; 
  let maxCount = 0;


  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (count[num] == null) {
      count[num] = 1;
    } else {
      count[num]++;
    }


    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = num;
    }
  }

  return { mode, maxCount, count };
}

const data = [1, 3, 3, 7, 8, 8, 8, 2, 9,2,2,2,2];
const result = findMode(data);
console.log(result);
