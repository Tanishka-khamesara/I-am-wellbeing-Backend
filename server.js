require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")

const app = express();
const PORT = process.env.PORT || 5000



app.use(bodyParser.json());
app.use(cors({
    origin:"*"
}))

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDb Connected")).catch((err) => console.error(err));

app.use("/wellBeing/api", routes);


app.listen(PORT,()=>{console.log("server is up and running")})