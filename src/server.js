require("./db/connection.js");
const express = require("express");
const cors = require("cors");
const requestRouter = require("./requestRouter.js");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(requestRouter);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});