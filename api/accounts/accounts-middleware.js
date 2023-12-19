const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  console.log('Account payload being checked')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log('Account Name Unique')
  next()
}

exports.checkAccountId = async (req, res, next) => {
 try{
  const account = await Account.getById(req.params.id)
  if(!account) {
    next( {status: 404, message: 'account not found'})
  } else {
    req.account = account
    next()
  }
 } catch (err) {
  next(err)
 }
}
