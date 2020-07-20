/**
 * kebab-case -> camelCase
 */
export function transformCamelCase(str) {
  var re = /-(\w)/g
  return str.replace(re, function($0, $1) {
    return $1.toUpperCase()
  })
}
