const Student = require('../../models/student');
const Teacher = require('../../models/teacher');
const Teacher_Student = require('../../models/teacher-student');

const register = async (req, res) => {
    const { teacher, students } = req.body;
    let teacherId = '';
    try {
        getTeacherId(teacher).then((tid) => {
            teacherId = tid;
        });
        students.forEach(student => {
            console.log('list of students', student)
            getStudentId(student).then((studentId) => {
                if (studentId && teacherId) {
                    insert_teacher_Student(teacherId, studentId).then((result) => {
                        if (result) {
                            return res.status(200).json({
                                success: true,
                                message: 'students added successfully',
                                result: result
                            })
                        } else {
                            return res.status(200).json({
                                success: true,
                                message: 'students have already assigned with teacher!',
                            })
                        }
                    });
                }
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
    //check teacher exist
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
    let output = '';
    Teacher_Student.findOne({ where: { 'TeacherId': teacherId, 'StudentId': studentId } }).then((connection) => {
        if (!connection) {
            Teacher_Student.create({ 'TeacherId': teacherId, 'StudentId': studentId }).then((result) => {
                output = result;
            });
        }
        return output;
    });
}
module.exports = { register };