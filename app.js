//npm - global command, come with node
//npm --version

//local dependency - use it onlt in this particular project
//npm i <packageName>

//globally dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file (store important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything is default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)