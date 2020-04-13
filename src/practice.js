const addPrefix = (prefix) => {
  return (name) => {
      return prefix + name;
  }
} 

const prefixSir = addPrefix("Sir ");
const prefixDr = addPrefix("Dr. ");

console.log(prefixSir("Claire"));
console.log(prefixSir("Joyce"));
console.log(prefixDr("Claire"));
console.log(prefixDr("Joyce"));

// =======================================

function soundMaker(sound) {
  return function(animal) {
    return `${animal} says ${sound}~`;
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
console.log(lionSound("Lion"));
console.log(mouseSound("Mouse"));


// =======================================

function nameEnhancer(prefix) {
  return function(suffix) {
    return function(name) {
      return `${prefix} ${name} ${suffix}`;
    }
  }
}

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

console.log(misterJunior("Claire"));
console.log(duchessThird("Claire"));

// =======================================

const addaMult = (numToAdd) => {
  return (numToMultiply) => {
    return (num) => {
      return (num + numToAdd) * numToMultiply;
    } 
  }
}

const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);
console.log(addTwoMultiplyByThree(5));
console.log(addFiveMultiplyByNine(2));


// =======================================

const reverse = (sentence) => {
  if (sentence === "") {
    return "";
  } else {
    return reverse(sentence.slit());
  }
}

