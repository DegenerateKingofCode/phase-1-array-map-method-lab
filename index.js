const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// Edit tutorials so first letter in each string is capitalized. 
 // let tutorials = 
const outsideFunction = string => {
  let newArray = string.split(" ")
  let newArray2 = newArray.map(element => element[0].toUpperCase() + element.slice(1))
  return newArray2.join(' ')
}


const titleCased = () => {
  let tutorials2 = tutorials.map(element => outsideFunction(element))
  return tutorials2
 

}
