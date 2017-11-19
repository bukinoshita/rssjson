'use strict'

import test from 'ava'
import m from '.'

test(async t => {
  const result = await m('https://hipsters.tech/feed/podcast/')
  t.truthy(result)
})

test('error', async t => {
  const error = await t.throws(m())

  t.is(error.message, '`url` is required')
})
