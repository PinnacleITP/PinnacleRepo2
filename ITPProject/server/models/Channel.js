const mongoose = require('mongoose')

const ChannelSchema = new mongoose.Schema({
    channelName: String,
    channelDescription: String, 
    channelDp: String,
    memberID: String
})

const ChannelModel = mongoose.model("channel", ChannelSchema)

module.exports = ChannelModel