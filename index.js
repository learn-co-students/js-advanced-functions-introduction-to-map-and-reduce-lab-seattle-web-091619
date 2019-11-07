// Your code here
const mapToNegativize = (arr) => {
  let newArr = [];
  for (const num of arr) {
    newArr.push(num * -1);
  }
  return newArr;
}

const mapToNoChange = (arr) => {
  let newArr = []
  for (const name of arr) {
    newArr.push(name);
  }
  return newArr;
}

const mapToDouble = (arr) => {
  let newArr = [];
  for (const n of arr) {
    newArr.push(n * 2);
  }
  return newArr;
}

const mapToSquare = (arr) => {
  let newArr = [];
  for (const n of arr) {
    newArr.push(n ** 2);
  }
  return newArr;
}

const reduceToTotal = (arr, start=0) => {
  for (const n of arr) {
    start += n;
  }
  return start;
}

const reduceToAllTrue = (arr) => {
  for (const element of arr) {
    if (element == false) {
      return false;
    }
  }
  return true;
}

const reduceToAnyTrue = (arr) => {
  for (const element of arr) {
    if (element == true) {
      return true;
    }
  }
  return false;
}