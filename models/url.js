import mongoose from 'mongoose';
 
const urlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      unique: true
    },
    shortUrl:{
      type:String
    }
  }
);
 
const Url = mongoose.model('url', urlSchema);
 
export default Url;