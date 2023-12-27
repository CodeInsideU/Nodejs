// child process is a node module used to create sub process whithin a script.
// you can perform different tasks with your sript by just using some method

const cp = require('child_process')
// cp.execSync('calc')
// cp.execSync('start chrome https://www.linkedin.com/feed/')
console.log('output '+ cp.execSync('node demo.js'))