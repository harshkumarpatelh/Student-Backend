require('dotenv').config();
const express = require("express");
const studentRouter = require("./Routes/student");
const docRouter = require("./Routes/document");
const { ErrorHandler } = require("./middleware/ErrorHadler");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

// Route for student
app.use("/api", studentRouter);

// Route for document 
app.use("/api", docRouter);

app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log("Server Started at ", PORT);
})