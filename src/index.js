/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const dateFormat = require('./date-format')

const filters = {
  dateFormat,
}

module.exports = (twigInstance) => {
  twigInstance.extend(() => {
    for (const filter in filters) {
      twigInstance.extendFilter(filter, filters[filter])
    }
  })
}
