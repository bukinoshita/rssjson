'use strict'

const request = require('request-promise-native')
const xml2js = require('xml2js')

const parser = require('./lib/parser')

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    if (!url) {
      return reject(new TypeError('`url` is required'))
    }

    const res = await request({
      url,
      pool: false,
      followRedirect: true
    })

    const p = new xml2js.Parser({
      trim: false,
      normalize: true,
      mergeAttrs: true
    })

    p.parseString(res, (err, rss) => {
      if (err) {
        return reject(err)
      }

      resolve(parser(rss))
    })
  })
}
