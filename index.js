const kRouteDefined = Symbol.for('continify.route.defined')

function route (opts) {
  opts[kRouteDefined] = true
  return opts
}

module.exports = route
module.exports.default = route
module.exports.route = route
