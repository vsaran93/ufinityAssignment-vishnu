const Student = require('../../models/student');
const Teacher = require('../../models/teacher');
const Teacher_Student = require('../../models/teacher-student');

const register = async (req, res) => {
    const { teacher, students } = req.body;
    let teacherId = '';

    if (!teacher || students.length < 1) {
        res.status(400).json({
            success: false,
            message: 'Bad Request'
        })
    }
    try {
        getTeacherId(teacher).then((teacher_id) => {
            teacherId = teacher_id;
            new Promise((resolve, reject) => {
                students.forEach(student => {
                    getStudentId(student).then((studentId) => {
                        if (studentId && teacherId) {
                            insert_teacher_Student(teacherId, studentId);
                        }
                    });
                });
                resolve(res.status(200).json({
                    success: true,
                    message: 'students added successfully with the given teacher'
                }))
            });
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: 'internal server error',
            errorDetails: err
        })
    }
}


const getTeacherId = (email_teacher) => {
    let promise = new Promise((resolve, reject) => {
        Teacher.findOne({ where: { 'Email': email_teacher } }).then((result_teacher) => {
            if (!result_teacher) {
                Teacher.create({ Email: email_teacher }).then((new_teacher) => {
                    resolve(new_teacher.TeacherId);
                });
            } else {
                resolve(result_teacher.TeacherId);
            }
        });
    })
    return promise;
};

const getStudentId = async (email_student) => {
    let promise = new Promise((resolve, reject) => {
        Student.findOne({ where: { 'Email': email_student } }).then((result_student) => {
            if (!result_student) {
                Student.create({ 'Email': email_student }).then((new_student) => {
                    resolve(new_student.StudentId)
                });
            } else {
                resolve(result_student.StudentId)
            }
        })
    })
    return promise;
}

const insert_teacher_Student = async (teacherId, studentId) => {
    Teacher_Student.count({ where: { 'TeacherId': teacherId, 'StudentId': studentId } }).then((count) => {
        if (count == 0) {
            Teacher_Student.create({ 'TeacherId': teacherId, 'StudentId': studentId });
        }
    });
}
module.exports = { register };