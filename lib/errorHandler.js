export default function errorHandler(err, _req, res, next) {
  console.log(`🤖🤖🤖 Something Went Wrong!
  Error: ${err.name}
  `)
  console.log(err.stack)

  res.sendStatus(500)
  next(err)
}