const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: {
    type: String,
    unique: true
  },
  link: String,
  saved: {
    type: Boolean,
    default: false
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

const Article = module.exports = mongoose.model('Article', articleSchema);