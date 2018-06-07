const fs = require('fs')
//grsb the contents of the file named todos.json, parse it into a json object and return it from the function.  The json file lives in the current directory where our app is running
function get() {
  return JSON.parse(fs.readFileSync('./todos.json', 'utf-8'))
}

//id going to transform into object from a file
function set(data) {
  fs.writeFileSync('./todos.json', JSON.stringify(data))
}
//set is gonig to take data as a parameter and transform it into text and then write the text/json to the file system as the todos.json file.
module.exports = { get, set }
