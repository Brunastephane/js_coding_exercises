function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let newNums = [];
  nums.forEach((element) => {
    newNums.push(element * element);
  });
  return newNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newWord = "";
  for (let i in words) {
    //when the formula is bigger I believe it is more readable that way
    if (i == 0) {
      newWord += words[i];
    } else {
      newWord += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }    
  }
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count += people[i].subjects.length;
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  const arr = [];
  menu.forEach(obj => obj.ingredients.forEach(ing => { if (ing === ingredient) arr.push(ing) }));
  return arr.length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && result.filter(n=> n == arr1[i]) == 0) {
        result.push(arr1[i]);
      }
    }
  }

  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
