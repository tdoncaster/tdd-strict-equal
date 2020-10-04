var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEquals = require('../calculation')

describe('calculation', () => {
  describe('strictEquals', () => {
    it('returns false when string number and number are compared', () => {
      var num1 = '3'
      var num2 = 3

      var total = strictEquals(num1, num2)

      expect(total).to.equal(false)
    }),
    it('returns false when numbers are different', () => {
      var num1 = 3
      var num2 = 4

      var total = strictEquals(num1, num2)

      expect(total).to.equal(false)
    }),
    it('returns true when numbers are equal', () => {
      var num1 = 4
      var num2 = 4

      var total = strictEquals(num1, num2)

      expect(total).to.equal(true)
    })
  })
})


























/* var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var sumAll = require('../calculation')

describe('calculation', () => {
  describe('sumAll', () => {
    it('returns the sum of the numbers in the array provided', () => {
      var list = [1, 2, 3, 4]

      var total = sumAll(list)

      expect(total).to.equal(10)
    }),
    it('returns the sum of the numbers in the array provide', () => {
      var list = [7, 2, 3, 4]

      var total = sumAll(list)

      expect(total).to.equal(16)
    })
  })
})
 */













/* const assert = require('chai').assert
const app = require('../calculation')
const mocha = require('mocha')

mocha.describe('App', function () {
  mocha.it('app should return hello', function () {
    assert.equal(app(), 'hello')
  })
}) */
