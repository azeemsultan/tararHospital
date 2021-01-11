const express     = require("express");
const cors        = require("cors");
const connectDB   = require("./Config/database");
const path = require('path');
const customer    = require("./Routes/api/customer");
const doctor    = require("./Routes/api/doctor");
const appointment   = require("./Routes/api/appointment");
const consult   = require("./Routes/api/consult");
const admin     = require("./Routes/api/admin");
const payment     = require("./Routes/api/payment");
const geolocation     = require("./Routes/api/geolocation");


process.env.NODE_ENV = 'production';
process.env.PORT = 54321

const app = express();
app.use(cors());
app.use("/api/customer", customer);
app.use("/api/doctor", doctor);
app.use("/api/appointment", appointment);
app.use("/api/consult", consult);
app.use("/api/admin",admin);
app.use("/api/payment",payment);
app.use("/api/geolocation",geolocation);


if(process.env.NODE_ENV === 'production')
{
app.use(express.static('frontend/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'));
    })

}
connectDB();
const port = 3333;
app.listen(port,()=> console.log(`Activating project on port ${port}...`));