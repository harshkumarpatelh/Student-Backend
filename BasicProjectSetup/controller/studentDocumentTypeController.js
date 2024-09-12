const { AppError } = require("../middleware/ErrorHadler");
const DocumentTypes = require("../models/documenttypes");
const StudentDocuments = require("../models/studentDocuments");


// Get all entries of document type like pan, addhar etc. from 'documentTypes table'
const getDocumentType = async (req, res, next) => {
    const data = await DocumentTypes.findAll();

    if (!data) {
        return next(new AppError(500, "No Documents Found"));
    }

    res.status(200).json({
        status: "success",
        result: data,
        message: "Successfully got all document type"
    });
}


// post data in 'studentDocuments table'
// studentId -> foreign Key from students table
// docType -> foreign Key from documentTypes table
const addStudentDocument = async (req, res, next) => {
    const { studentId, docType, documentLink } = req.body;

    if (!studentId) {
        return next(new AppError(400, "Student Id is required"));
    }
    if (!docType) {
        return next(new AppError(400, "Document Type is required"));
    }
    if (!documentLink) {
        return next(new AppError(400, "Document Link is required"));
    }

    const newStudentDocument = await StudentDocuments.create({
        studentId,
        docType,
        documentLink
    });

    if (!newStudentDocument) {
        return next(new AppError(500, "Unable to add document"));
    }

    res.status(200).json({
        status: "success",
        result: newStudentDocument,
        message: "Document Added Successfully"
    });
}

// Getting all type of document from 'documentTypes' table of a particular student through studentId 
const getDocumentByStudentId = async (req, res, next) => {
    const studentId = req.params.stuId;
    const getDocByStudentId = await DocumentTypes.findAll({
        include:
        {
            model: StudentDocuments,
            where: {
                studentId: studentId
            }
        }
    })

    if (!getDocByStudentId) {
        return next(new AppError(500, "Document not found"));
    }

    res.status(200).json({
        statu: "success",
        result: getDocByStudentId,
        message: "Successfully got documents type"
    });
}

module.exports = {
    getDocumentType,
    addStudentDocument,
    getDocumentByStudentId,
}