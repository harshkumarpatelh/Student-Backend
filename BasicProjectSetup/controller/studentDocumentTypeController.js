const { AppError } = require("../middleware/ErrorHadler");
const DocumentTypes = require("../models/documenttypes");
const StudentDocuments = require("../models/studentDocuments");

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

module.exports = {
    getDocumentType,
    addStudentDocument
}