import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { register } from '../../services/user/retrieveStudents';
import '../../index.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function ResponsiveDialog(props) {
    const [students, setStudents] = useState([]);
    const [teacher, setTeacher] = useState("");
    const [message, setMessage] = useState("");
    const [primaryStudent, setPrimaryStudent] = useState("");
    const theme = useTheme();
    const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const addInput = ev => {
        debugger;
        setStudents(prevStudents => ([...prevStudents, students.length]))
    }

    const handleInput = (e, setFunction) => {
        setMessage("");
        setFunction(e.target.value)
    }

    const handleRegister = () => {
        if(primaryStudent && teacher) {
            let studentList = [];
            studentList.push(primaryStudent)
            register({"teacher": teacher, "Students": studentList}).then((res) => {
                
            })
        } else {
            setMessage("To Register Teacher's Email address and atleast one student email address needed!")
        }
    }
    console.log('check states', students)
    return (
        <div>
            <Dialog
                className="modal-wrapper"
                fullScreen={fullScreen}
                open={props.openDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Register Teacher and Students"}</DialogTitle>
                <div><p className="error-msg">{message}</p></div>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <div><h4>Teacher</h4></div>
                            <TextField
                                value={teacher}
                                label="Email Address"
                                onChange={(e) => handleInput(e,setTeacher)}
                                required
                                id="outlined-required"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div><h4>Students</h4></div>
                            <TextField
                                value={''}
                                label="Email Address"
                                onChange={(e) => handleInput(e, setPrimaryStudent)}
                                required
                                id="outlined-required"
                                variant="outlined"
                            />
                            <div><Button onClick={addInput} color="primary" autoFocus>Add Student</Button></div>
                            {students.map(a => <TextField className="student-input" required id="outlined-required" variant="outlined" label="Email Address" />)}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeModal} variant="outlined" color="secondary" >
                        Cancel
                    </Button>
                    <Button onClick={handleRegister} variant="outlined" color="primary">
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}