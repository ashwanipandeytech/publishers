const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    generatedId: {
        type: Number,

    },
    status: {
        type: String,

    },
    datetime: {
        type: String,

    },
    duration: {
        type: String,

    },
    offer: {
        type: String,

    },
    merchant: {
        type: String,

    },
    clientphoneNo: {
        type: String,
    },
    forwardedNo: {
        type: String,
    },
    pointspercall: {
        type: String,
    },
    uploadedBy: {
        type: String,
    },
    email: {
        type: String,
    },

});

module.exports = mongoose.model("Entry", entrySchema);
