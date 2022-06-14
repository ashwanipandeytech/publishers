const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const entrySchema = new Schema({
    id: {
        type: String,
    },
    email: {
        type: String,
    },
    amountRecharged: {
        type: String,
    },
    remainingBalance: {
        type: String,
    },
    pointspercall: {
        type: String,
    },
    isRechared: {
        type: Boolean,
        default: false,
    },
    rechargedOn: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model("Recharge", entrySchema);