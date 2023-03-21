const { Schema, model} = require('mongoose');

const thoughtsSchema = new Schema(
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
        //add get function here for the timestamp query
    },

    reaction:[
        {
            type:Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ], 
    
    createdAt:{
        type:Date,
        default:new Date,
    },
   
},
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;