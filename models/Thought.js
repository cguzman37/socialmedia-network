const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
    thoughtText:{
        type:String,
        required:true,
        minlength:1,
        maxlength:280
    },

    username:{
        type:String,
        required:true,
    
    },

    reaction:[
        reactionSchema
    ], 
    
    createdAt:{
        type:Date,
        default:Date.now,
        get:timestamp =>dateFormat(timestamp)
    },
   
},
);
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length
});


const Thought = model('thought', thoughtSchema);

module.exports = Thought;