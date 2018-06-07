const { head } = require('ramda')

const [execNodePath, jsPath, cmd, ...everythingelsegoeshere] = process.argv

//process.argv.forEach(val, index) =>
//console.log(``
console.log(handleCmd(cmd))
function handleCmd(cmd) {
  // command could be anything like add, init, remove
  switch (cmd) {
    case 'add':
      return 'you asked for the add cmd'
    case 'rm':
      return 'you asked for the rm cmd'
    case 'init':
      return 'you asked for the init cmd'
    default:
      return `${cmd} is not supported`
  }
}
