const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (var i = 0; i < nums.length; i++) {
    if (n == nums[i] && i < nums.length - 1) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  var count1 = 0;
  var count0 = 0;
  var array = str.split("");
  array.forEach((element) => {
    if (element == "1") {
      count1++;
    }
    if (element == "0") {
      count0++;
    }
  });
  return { 1: count1, 0: count0 };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  n = n + "";
  return parseFloat(n.split("").reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  var sum = 0;
  arrs.forEach((element) => {
    for (var i = 0; i < element.length; i++) {
      sum = sum + element[i];
    }
  });
  return sum;
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  var newArr = [];
  if (arr.length <= 1) {
    return arr;
  } else {
    newArr.push(arr[arr.length - 1]);
    for (var i = 1; i < arr.length - 1; i++) {
      newArr.push(arr[i]);
    }
    newArr.push(arr[0]);
  }
  return newArr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (var key in haystack) {
    if (
      haystack[key]
        .toString()
        .toUpperCase()
        .indexOf(searchTerm.toUpperCase()) != -1
    ) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  var jsonresult ={};
  var arr = [];
  arr = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").split(" ");

  arr.sort();
  var current = null;
  var cnt = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != current) {
      if (cnt > 0) {
        
        jsonresult[current] = cnt;
      }
      current = arr[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    jsonresult[current] = cnt;
  }
  return jsonresult;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
