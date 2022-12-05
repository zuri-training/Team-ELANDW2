const express = require("express");
const { json } = require("express");


const app = express();
const port = process.env.PORT || 3000;

const routes = require("./server/routes/priceCompareRoutes");


app.use(json());
app.use("/", routes);



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})