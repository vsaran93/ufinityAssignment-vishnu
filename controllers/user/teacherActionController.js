const Student = require('../../models/student');

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

module.exports = { suspendStudents }