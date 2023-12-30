function myMiddlewares(req, res, next){
    console.log('I am custom middleware')
    next()
}

module.exports = myMiddlewares