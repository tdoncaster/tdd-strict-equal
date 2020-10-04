function strictEquals(num1, num2) {
  // return Object.is(num1, num2)
  const isEqual = Object.is(num1, num2)

  return isEqual
}


module.exports = strictEquals








/* function sumAll(nums) {
  var total = 0

  for (var i = 0; i < nums.length; i++) {
    total = total + nums[i]
  }

  return total
}


module.exports = sumAll
 */

