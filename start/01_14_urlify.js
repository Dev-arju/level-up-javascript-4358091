// Write your code here
function urlfy(title){
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  const titleWithoutPunctuation = title.replace(punctuation, "")
  console.log(titleWithoutPunctuation);
  return titleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-")
}

console.log(urlfy('I got a new Job !!!*'));