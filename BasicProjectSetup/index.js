require('dotenv').config();
const express = require("express");
const studentRouter = require("./Routes/student");
const docRouter = require("./Routes/document");
const ErrorHandler = require("./middleware/ErrorHadler");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use("/student", studentRouter);
app.use("/document", docRouter);

app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log("Server Started at ", PORT);
})