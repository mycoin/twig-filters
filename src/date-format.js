/* eslint-disable prefer-template */
const formatNaming = {
  YYYY: 'getFullYear',
  YY: 'getYear',
  MM: dateTime => dateTime.getMonth() + 1,
  DD: 'getDate',
  HH: 'getHours',
  mm: 'getMinutes',
  ss: 'getSeconds',
}
const padLeft = (stringValue, length) => (String('00' + stringValue)).slice(-length)
const formatTypes = {
  default: '{YYYY}-{MM}-{DD}',
  full: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
  short: '{YY}-{MM}-{DD}',
}

const getDateTime = (date) => {
  if (date instanceof Date) {
    return date
  }
  return new Date(date)
}

module.exports = (dateValue, format) => {
  const formatType = formatTypes[format] || format || formatTypes.default
  const dateTime = getDateTime(dateValue)

  if (!dateValue || isNaN(dateTime.getTime())) {
    return ''
  }

  return formatType.replace(/(\{([a-zA-Z]*)\})/ig, (key, _, matched) => {
    const matchName = formatNaming[matched]
    const matchLength = matched.length
    if (typeof matchName === 'function') {
      return padLeft(matchName(dateTime), matchLength)
    } else if (typeof dateTime[matchName] === 'function') {
      return padLeft(dateTime[matchName](), matchLength)
    }
    return matched
  })
}
