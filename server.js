const express= require("express")
const app=express();
const PORT=5001;
const URLroutes=require("./routes/url");

const connectToMongoDB = require("./connect");
const connectionString = "mongodb://localhost:27017/short_url";

connectToMongoDB(connectionString);

app.use(express.json());
app.use("/url",URLroutes);
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))