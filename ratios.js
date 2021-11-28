function plusMinus(arr) {
  var negative = 0
  var positive = 0
  var zeros = 0
  for (var i=0; i<arr.length; i++) {
      if (arr[i] < 0){
          negative = negative + 1
      }
      else if(arr[i] > 0) {
          positive = positive + 1
      }
      else if(arr[i] === 0) {
          zeros = zeros + 1
      }
  }
  console.log((positive/arr.length).toFixed(6))
  console.log((negative/arr.length).toFixed(6))
  console.log((zeros/arr.length).toFixed(6))
}