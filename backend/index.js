const express     = require("express");
const cors        = require("cors");
const connectDB   = require("./Config/database");

const customer    = require("./Routes/api/customer");
const doctor    = require("./Routes/api/doctor");



const app = express();
app.use(cors());
app.use("/api/customer", customer);
app.use("/api/doctor", doctor);



connectDB();
const port = process.env.PORT || 3333;
app.listen(port,()=> console.log(`Activating project on port ${port}...`));