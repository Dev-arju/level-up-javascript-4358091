// Write your code here

function calculateSum(...bill){
  const totalCoffee = bill.reduce((accu, value)=>{
    return accu += value
  }, 0)
  return `The total bill is ${totalCoffee * 1.25}`
}

console.log(calculateSum(2,3,1,5))