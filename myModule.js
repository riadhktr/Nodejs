
const fs = require('fs');
const path = require('path');


module.exports = (directory, ext, callback) => {
    ext = `.${ext}`;
    fs.readdir(directory, (err, list) => {
    
        if (err) return callback(err);
        const filtred = list.filter(file => {
            return path.extname(file) === ext;
        })
        return callback(null, filtred); 
    })
        
}