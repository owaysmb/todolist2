const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },

})

const task = mongoose.model("task",taskSchema )
module.exports = task