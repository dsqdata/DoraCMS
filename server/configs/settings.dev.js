const path = require('path')

module.exports = {

    mongo_connection_uri: 'mongodb://doracms:Dongsiqi12@www.dsqhost.com:3017/doracms2',
    system_log_path: path.resolve(__dirname, '../../logs'),
    upload_path: process.cwd() + '/public/upload' // 文件上传路径

}
