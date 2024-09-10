const Students = require("../models/student");
const newStudentHandler = async (req, res) => {
    try {
        const addStudent = await Students.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        });
        res.status(201).json({
            result: addStudent,
            status: 'success'
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'failure',
            message: err
        });
    }
}

const getStudentHandler = async (req, res, next) => {
    try {
        const allStudent = await Students.findAll();
        res.status(200).json({ allStudent });
    }
    catch (err) {
        next(err);
        // res.status(500).json({ Error: `${err}` });
    }
}


const updatedStudentHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const studentByPK = await Students.findByPk(id);
        const { firstName, lastName, email } = req.body;

        await studentByPK.update({
            ...(firstName?.length && { firstName }),
            ...(lastName?.length && { lastName }),
            ...(email?.length && { email }),
        });

        res.status(200).json({
            result: {},
            status: 'success',
            message: "Student Updated successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'failure',
            message: err.message
        });
    }
}


module.exports = {
    newStudentHandler,
    getStudentHandler,
    updatedStudentHandler,
}