const mongoose = require('mongoose')

const DownloadsSchema = new mongoose.Schema({
    memberid: String,
    gameid: String,
    paymentid: String
})

const DownloadsModel = mongoose.model("download", DownloadsSchema)

module.exports = DownloadsModel
