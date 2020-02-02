import axios from 'axios';

const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
}
let serverUrl = 'http://localhost:3006/api'

export const getAllStudents = (teacher_email) => {
    let url = `${serverUrl}/commonstudents?teacher=${teacher_email}`;
    return axios.get(url, headers);
}

export const register = (user) => {
    let url = `${serverUrl}/register`;
    return axios.post(url, user, headers);
}

export const suspendStudent = (student) => {
    let url = `${serverUrl}/suspend`;
    return axios.post(url, student, headers);
}

export const sendNotification = (notification) => {
    let url = `${serverUrl}/retrievefornotifications`;
    return axios.post(url, notification, headers);
}