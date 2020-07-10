const Bing = require('../models/bing')
class BingClass {
  constructor () {

  }
  async getAll (req, res, next) {
    const { pageSize = 10, page = 1, } = req.query;
    try {
      let total = await Bing.find({}).countDocuments()
      let data = await Bing.find({}).sort({ startdate: 'desc' }).skip((Number(page - 1)) * pageSize).limit(Number(pageSize))
      res.send({
        code: 1,
        data,
        total
      })
    } catch {
      res.send({
        status: 0,
        message: 'error'
      })
    }
  }
  save (info) {
    console.log(info)
    info.url = 'http://bing.shanch.cn/' + info.hsh
    Bing.findOne({ hsh: info.hsh }, (err, result) => {
      if (!result) {
        Bing.create(info)
      }
      // console.log(err, response)
    })
  }
}

module.exports = new BingClass()