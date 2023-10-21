const express = require('express')
const cors = require("cors")

const app = express()
const port = 3001


const product = require("./routes/productRouter");

app.use(express.json());
app.use(cors());
app.use("/api", product);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  