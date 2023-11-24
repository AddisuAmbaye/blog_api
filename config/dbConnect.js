const mongoose = require('mongoose');

// function to connect 
const dbConnect = async () =>{
      try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB is connected succesfully");
      } 
      catch (error) {
        console.log(error.message);
        process.exit(1);
      }
}
dbConnect();