const Student = require('../../models/student');
const sequelize = require('../../db/connection');
const { QueryTypes } = require('sequelize');

const suspendStudents = (req, res) => {
    const { student } = req.body;
    Student.findOne({ where: { 'Email': student } }).then((marked_student) => {
        marked_student.update({
            IsSuspended: true
        }).then((result) => {
            res.status(200).json({
                success: true,
                message: 'student has suspended successfully !!'
            })
        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: 'internal server error'
            })
        })
    })
};


const sendNotifications = (req, res) => {
    const { teacher, notification } = req.body;
    let finalStudentList = [];
    let getEmailsFromText = [];
    try {
        getEmailsFromText = getEmailIdsFromText(notification);
        sequelize.query(`SELECT s.Email FROM Teacher_Student as ts 
        LEFT JOIN Teacher as t ON ts.TeacherId = t.TeacherId
        LEFT JOIN Student as s ON ts.StudentId = s.StudentId
        WHERE t.Email = :email`, {
            replacements: { email: teacher },
            type: QueryTypes.SELECT
        }).then((studentList) => {
            let studentEmailList = studentList.map(a => a.Email);
            finalStudentList = studentEmailList.concat(getEmailsFromText)
            res.status(200).json({
                recipients: finalStudentList
            });
        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: 'internal server error',
                errorDetails: err
            })
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            errorDetails: err
        })
    }
}


const getEmailIdsFromText  = (text) => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

module.exports = { suspendStudents, sendNotifications }