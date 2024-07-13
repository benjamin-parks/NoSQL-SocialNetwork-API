const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: 'Must provide a thought.',
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Must provide a username.'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;