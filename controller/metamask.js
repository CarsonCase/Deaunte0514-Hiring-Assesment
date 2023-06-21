const path = require('path');

const getSignature = function(req, res){
    return res.sendFile(path.join(__dirname, '../html/metamask.html'))
}

module.exports = { getSignature}