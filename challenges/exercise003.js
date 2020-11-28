function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  var newnums = [];
  nums.forEach((element) => {
    newnums.push(element * element);
  });
  return newnums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var newword = "";
  for (var i in words) {
    if (i == 0) {
      newword = newword + words[i];
    } else {
      newword = newword + words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  return newword;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var count = 0;
  for (var i = 0; i < people.length; i++) {
    count = count + people[i].subjects.length;
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (var i = 0; i < menu.length; i++) {
    for (var j = 0; j < menu[i].ingredients.length; j++) {
      if (menu[i].ingredients[j] == ingredient) {
        return true;
      }
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
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
