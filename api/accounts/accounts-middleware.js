exports.checkAccountPayload = (req, res, next) => {
  console.log('Account payload being checked')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log('Account Name Unique')
  next()
}

exports.checkAccountId = (req, res, next) => {
  console.log('Account Id checked')
  next()
}
