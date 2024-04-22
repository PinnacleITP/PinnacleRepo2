const mongoose = require('mongoose')

const StreamSchema = new mongoose.Schema({
    name: String,
    videoUrl: String, 
    thumbnailUrl: String, 
    description: String,
    viewCount: Number,
    type: String, 
    channel_ID: String,
    secretVideoCode: String,
    gameType:String
})

const StreamModel = mongoose.model("stream", StreamSchema)

module.exports = StreamModel