const Student = require('../../models/student');
const sequelize = require('../../db/connection');
const Teacher = require('../../models/teacher');
const Teacher_Student = require('../../models/teacher-student');
const { QueryTypes } = require('sequelize');

const getAssociatedStudents = (req, res) => {
    const teacherList = req.query.teacher;

    const getStudent = sequelize.query(`SELECT DISTINCT s.Email FROM teacher_student as ts 
    LEFT JOIN teacher as t ON t.TeacherId = ts.TeacherId
    LEFT JOIN student as s ON s.StudentId = ts.StudentId
    WHERE t.Email IN(:email) AND s.IsSuspended = :status`, { 
        replacements: { email: teacherList, status: false },
        type: QueryTypes.SELECT
    })

    
    getStudent.then((students) => {
        res.status(200).json({
            success: true,
            studentsList: students
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    })

   
}


module.exports = { getAssociatedStudents }