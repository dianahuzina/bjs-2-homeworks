function getArrayParams(...arr) {
  let array = [...arr];
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) { min = array[i] };
    if (array[i] >= max) { max = array[i] };
    sum += array[i];
  }
  let avrSum = (sum / array.length).toFixed(2);

  let result = {
    min: min,
    max: max,
    avg: parseFloat(avrSum)
  }
  return { min: result.min, max: result.max, avg: result.avg };
}

function summElementsWorker(...arr) {
  let array = [...arr];
  let sum = 0;
  if (array.length === 0) return 0;
  else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) return 0;
  else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let difference = max - min;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) return 0;
  else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) sumEvenElement += array[i];
      else sumOddElement += array[i];
    }  
    let difference = sumEvenElement - sumOddElement;
    return difference;
  }
}

function averageEvenElementsWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) return 0;
  else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
        countEvenElement += 1;
      }
    }
    let avgEvenElement = sumEvenElement / countEvenElement;
    return avgEvenElement;  
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) maxWorkerResult = result;
  }
  return maxWorkerResult;
}
