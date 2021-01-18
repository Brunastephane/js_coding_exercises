function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
    return nums.filter(num => num < 1)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let findNames = [];
  names.forEach(element => {
    if (char == element.charAt(0)){
      findNames.push(element);
    }
  })
  return findNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach(element => {
    if (element.substring(0,3) == "to "){
      verbs.push(element);
    }
  })
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let intergers = [];
  nums.forEach(element => {
    if (Number.isInteger(element)){
      intergers.push(element);
    }
  })
  return intergers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for(let i = 0; i < users.length; i++){
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  nums.forEach(element => {
    result.push(parseFloat(Math.sqrt(element).toFixed(2)));
  })
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let findSentence = [];

  sentences.forEach(element => {
    if(element.toUpperCase().indexOf(str.toUpperCase()) != (-1)){
      findSentence.push(element);
    }
  })
  return findSentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(element => {
    longestSides.push(Math.max.apply(Math,element));
  })
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
