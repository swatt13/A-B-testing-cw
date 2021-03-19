import mongoose from 'mongoose';

const AdSchema = mongoose.Schema({
    wasClicked: {
        type: Boolean,
        required: "Must be clicked"
    },
    option: {
        type: String,
        required: "Option is required"
    }
});

export default mongoose.model('AdStats', AdSchema)