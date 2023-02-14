const tap = require('tap')
const { default: defaultRoute, route } = require('..')
const DRoute = require('..')

tap.test('route defined', async t => {
  t.plan(6)

  const r1 = defaultRoute({
    url: 'aaa'
  })

  const r2 = route({
    url: 'bbb'
  })

  const r3 = DRoute({
    url: 'ccc'
  })

  const key = Symbol.for('continify.route.defined')

  t.equal(r1.url, 'aaa')
  t.equal(r1[key], true)
  t.equal(r2.url, 'bbb')
  t.equal(r2[key], true)
  t.equal(r3.url, 'ccc')
  t.equal(r3[key], true)
})
