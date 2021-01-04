function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice + (originalPrice * (vatRate/100))).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice - (originalPrice * (reduction/100))).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 0){
    return str.charAt((str.length/2) -1) + str.charAt(str.length/2);
  } 
  else{
    return str.charAt((str.length/2));
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let newword = "";
  for (let i = word.length -1; i >= 0; i--){
    newword += word[i];
  }
  return newword;
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newwords = [];
  words.forEach(element => {
    let newword = "";
    for (let i = element.length - 1; i >= 0; i--) {
      newword += element[i];
    }
    newwords.push(newword);
  });
  return newwords;
  
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for(let i in users){
    if(users[i].type === "Linux"){
      count ++;
    }
  } 
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0
  for(let i = 0; i < scores.length; i++){
    sum = sum + scores[i];
  }
  return parseFloat((sum / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 !=0) {
    return "fizz";
  }
    
  if (n % 5 === 0 && n % 3 !=0) {
    return "buzz";
  }

  if (n % 3 === 0 && n % 5 ===0) {    
    return "fizzbuzz";
  }else{
    return n;
  }
  
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
