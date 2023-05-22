import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (res) {
      console.log("MongoDB Connected...");
      // console.log('dbName: ', res.connections[0].name);
      console.log("dbName: ", res.connection.name);
      console.log("dbHost: ", res.connection.host);
      console.log("dbPort: ", res.connection.port);
    }
  } catch (err) {
    if (err) {
      console.log(
        "Failed to cennect to Database on startup - retrying in 5 sec",
        err.message
      );
      setTimeout(dbConnection, 5000);
    }
    //Exit process with failure
    process.exit(1);
  }
};
