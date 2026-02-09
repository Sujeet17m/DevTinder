const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
        validator: function (value) {
            return value.includes("@") && value.includes(".com");
        },
        message: "Invalid email format"
    }
}
,
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
    bio: {
        type: String,
        maxlength: 500,
        default: ""
    },
    age: {
        type: Number,
        min: 18,
        max: 100,
        default: null
    },
    location: {
        type: String,
        default: "",
        trim: true,
    },
    interests: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports =User;