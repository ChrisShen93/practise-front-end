const { injectBabelPlugin } = require('react-app-rewired')
const _ = require('lodash')

const deepClone = (object) => JSON.parse(JSON.stringify(object))

const getLoader = (rules, matcher) => {
  let match
  rules.some(rule => {
    return (match = matcher(rule)
      ? { rules, rule }
      : getLoader(rule.use || rule.oneOf || [], matcher))
  })
  return match
}

const rewireStylus = (config, env) => {
  const { rule: cssRule, rules } = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/)
  )
}

module.exports = function override (config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)
  return config
}
