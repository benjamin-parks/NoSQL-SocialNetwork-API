const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Must provide a username.',
        trim: true
    },
    email: {
        type: String,
        required: 'Must provide an email address.',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
    },
    {
        toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
});

const User = model('User', UserSchema);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


module.exports = User;