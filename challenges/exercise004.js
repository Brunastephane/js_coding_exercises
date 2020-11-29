function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var smallNum = [];
  nums.forEach(element => {
      if (element < 1){
        smallNum.push(element);
      }
  });
  return smallNum;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var findNames = [];
  names.forEach(element => {
    if (char == element.charAt(0)){
      findNames.push(element);
    }
  })
  return findNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var verbs = [];
  words.forEach(element => {
    if (element.substring(0,3) == "to "){
      verbs.push(element);
    }
  })
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var intergers = [];
  nums.forEach(element => {
    if (Number.isInteger(element)){
      intergers.push(element);
    }
  })
  return intergers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var cities = [];
  for(var i = 0; i < users.length; i++){
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var result = [];
  nums.forEach(element => {
    result.push(parseFloat(Math.sqrt(element).toFixed(2)));
  })
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var findsentence = [];

  sentences.forEach(element => {
    if(element.toUpperCase().indexOf(str.toUpperCase()) != (-1)){
      findsentence.push(element);
    }
  })
  return findsentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var longestSides = [];
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
