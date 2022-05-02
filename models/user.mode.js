/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
  evaluations: [
    {
      recipe_id: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
      },
      evaluation_id: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
});

module.exports = model('User', userSchema);
