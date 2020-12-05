const express     = require("express");
const cors        = require("cors");
const connectDB   = require("./Config/database");

const customer    = require("./Routes/api/customer");
const doctor    = require("./Routes/api/doctor");
const appointment   = require("./Routes/api/appointment");
const admin     = require("./Routes/api/admin");
const payment     = require("./Routes/api/payment");


const app = express();
app.use(cors());
app.use("/api/customer", customer);
app.use("/api/doctor", doctor);
app.use("/api/appointment", appointment);
app.use("/api/admin",admin);
app.use("/api/payment",payment);


connectDB();
const port = process.env.PORT || 3333;
app.listen(port,()=> console.log(`Activating project on port ${port}...`));