export default function logger(req, _res, next) {
  console.log(`--------------------------------
  🗺 INCOMING REQUEST!
  🌍 Request Method: ${req.method}
  🌏 Request URl: ${req.url}
  --------------------------------`)
  next()
}