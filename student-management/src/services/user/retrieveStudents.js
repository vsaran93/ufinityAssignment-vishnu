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