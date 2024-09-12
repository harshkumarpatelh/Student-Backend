const { AppError } = require("../middleware/ErrorHadler");
const Students = require("../models/student");

// handle post request for student signup route
const newStudentHandler = async (req, res, next) => {
    const addStudent = await Students.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    if(!addStudent){
        return next(new AppError(500, "unable to add student details"));
    }

    res.status(201).json({
        result: addStudent,
        status: 'success',
        message: "Student Added Successfully"
    });
}

// handle get request for student 
// get all entries of students
const getStudentHandler = async (req, res, next) => {
    const allStudent = await Students.findAll();

    if(!allStudent){
        return next(new AppError(500, "Cannot get students details"));
    }
    res.status(200).json({
        result: allStudent,
        status: 'success',
        massege: {}
    });

}

// handler to update a student details by studentId
const updatedStudentHandler = async (req, res, next) => {
    const id = req.params.id;
    const studentByPK = await Students.findByPk(id);

    if(!studentByPK){
        return next(new AppError(400, "Provide correct studentId"));
    }

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

// handler to delete a student entry by studentId
const deleteStudentHandler = async (req, res, next) => {
    const id = req.params.id;
    const studentByPK = await Students.findByPk(id);

    if(!studentByPK){
        return next(new AppError(400, "Provide correct studentId"));
    }

    await studentByPK.destroy();
    res.status(200).json({
        result: {},
        status: 'success',
        message: "Student Deleted successfully"
    });
}

module.exports = {
    newStudentHandler,
    getStudentHandler,
    updatedStudentHandler,
    deleteStudentHandler,
}