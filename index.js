
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3006;
const db = require('./db/connection');
const registerEndPoint = require('./controllers/user/registrationController');
const retrieveEndpoint = require('./controllers/user/retrieveController');
const teacherActionEndpoint = require('./controllers/user/teacherActionController');
const cors = require('cors')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

try {
    db.authenticate();
    console.log('db connected successfully !!')
}
catch (error) {
    console.log('there is an error', error);
}

app.get('/', (req, res) => {
    res.send('Welcome to Assignment');
})

app.post('/api/register', registerEndPoint.register)
app.get('/api/commonstudents', retrieveEndpoint.getAssociatedStudents)
app.post('/api/suspend', teacherActionEndpoint.suspendStudents)
app.post('/api/retrievefornotifications', teacherActionEndpoint.sendNotifications);

app.listen(port, () => {
    console.log(`App is currently running in port ${port} !`);
})