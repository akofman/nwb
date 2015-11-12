var path = require('path')
var exec = require('../exec')

var config = path.join(__dirname, '../.eslintrc')
var src = path.resolve('src')
var test = path.resolve('test')

console.log('nwb: lint')
exec(
  'eslint',
  ['-c', config, src, test],
  {cwd: path.join(__dirname, '..')}
)
