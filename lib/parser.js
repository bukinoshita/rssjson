'use strict'

const util = require('util')

module.exports = json => {
  const rss = { feed: [] }
  let channel = json.rss.channel

  if (util.isArray(json.rss.channel)) {
    channel = json.rss.channel[0]
  }

  if (channel.title) {
    rss.title = channel.title[0]
  }

  if (channel.description) {
    rss.description = channel.description[0]
  }

  if (channel.link) {
    rss.url = channel.link[0]
  }

  if (channel.image) {
    rss.image = channel.image[0].url
  }

  if (!rss.image && channel['itunes:image']) {
    rss.image = channel['itunes:image'][0].href
  }

  rss.image = rss.image && Array.isArray(rss.image) ? rss.image[0] : ''

  if (channel.item) {
    if (!util.isArray(channel.item)) {
      channel.item = [channel.item]
    }

    channel.item.forEach(val => {
      const obj = {}

      obj.title = !util.isNullOrUndefined(val.title) ? val.title[0] : ''
      obj.description = !util.isNullOrUndefined(val.description)
        ? val.description[0]
        : ''
      obj.link = !util.isNullOrUndefined(val.link) ? val.link[0] : ''
      obj.url = !util.isNullOrUndefined(val.link) ? val.link[0] : ''

      if (val.pubDate) {
        obj.created = Date.parse(val.pubDate[0])
      }

      if (val['media:content']) {
        obj.media = val.media || {}
        obj.media.content = val['media:content']
      }

      if (val['media:thumbnail']) {
        obj.media = val.media || {}
        obj.media.thumbnail = val['media:thumbnail']
      }

      if (val.enclosure) {
        obj.enclosures = []

        if (!util.isArray(val.enclosure)) {
          val.enclosure = [val.enclosure]
        }

        val.enclosure.forEach(enclosure => {
          const enc = {}

          for (const x in enclosure) {
            enc[x] = enclosure[x][0]
          }

          obj.enclosures.push(enc)
        })
      }

      rss.feed.push(obj)
    })
  }

  return rss.feed
}
