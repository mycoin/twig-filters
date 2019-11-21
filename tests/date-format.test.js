/* eslint-disable no-undef */
/* eslint-disable no-bitwise, no-mixed-operators, prefer-template */

const { assert } = require('chai')
const dateFormat = require('../lib/date-format')

describe('dateFormat', () => {
  it('invalid date should return ""', () => {
    const invalid = new Date('INVALID')

    assert(dateFormat(invalid) === '')
    assert(dateFormat('INVALID') === '')
  })

  it('dateTime support string, number or Date', () => {
    const date = '2014-12-12 23:59:59'
    const ts = +new Date(date)

    assert.equal(dateFormat(date, 'full'), date)
    assert.equal(dateFormat(ts, 'full'), date)
    assert.equal(dateFormat(new Date(date), 'full'), date)
  })

  it('dateFormat support FULL, DEFAULT and SHORT', () => {
    const date = new Date('2014-12-12 23:59:59')

    assert.equal(dateFormat(date, 'full'), '2014-12-12 23:59:59')
    assert.equal(dateFormat(date, 'default'), '2014-12-12')
    assert.equal(dateFormat(date, 'short'), '14-12-12')
  })
})
