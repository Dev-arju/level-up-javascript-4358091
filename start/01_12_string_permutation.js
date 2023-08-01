// Write your code here

function numPermutations(word){
  if(word.length === 1){
    return 1
  }
  
  return word.length * numPermutations(word.slice(1))
}

console.log(numPermutations('hello'))