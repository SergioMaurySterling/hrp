function miniMaxSum(arr) {
  const newArr = arr.sort(function(a,b){return a-b})
  const maxArr = newArr.slice(1,5)
  const minArr = newArr.slice(0,4)
  var maxSum = maxArr.reduce((a,b) => a+b)
  var minSum = minArr.reduce((a,b) => a+b)
  console.log(`${minSum} ${maxSum}`)
}