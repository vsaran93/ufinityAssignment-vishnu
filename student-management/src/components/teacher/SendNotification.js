import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { sendNotification } from '../../services/user/retrieveStudents';

const ERROR_MSG = "Please enter data to required fields";

export default function SendNotification(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [teacher, setTeacher] = useState("");
    const [notification, setNotification] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showRecipients, setShowRecipients] = useState(false);
    const [recipientsData, setRecipientsData] = useState("")

    const handleInput = (e, setFunction) => {
        setErrorMessage("");
        setFunction(e.target.value);
    }

    const handleSend = () => {
        if (teacher && notification) {
            let notificationRequest = {
                "teacher": teacher,
                "notification": notification
            }
            sendNotification(notificationRequest).then((res) => {
                setShowRecipients(true);
                setRecipientsData(res.data.recipients)
            })

        } else {
            setErrorMessage(ERROR_MSG)
        }
    }
    const handleOk = () => {
        setShowRecipients(false);
        setRecipientsData("");
        setTeacher("");
        setNotification("");
        props.closeNotificationPanel()
    }
    const displayRecipients = (data) => {
        return (
            <div className="notification-recipient">
                <h4>Recipients</h4>
                <ul>
                    {data.map(a => (
                        <li>{a}</li>
                    ))}
                </ul>
                <Button autoFocus variant="outlined" color="primary" onClick={handleOk}>
                    Ok
                </Button>
            </div>
        )
    }
    return (
        <div>
            <Dialog
                className="wrapper-notification"
                fullScreen={fullScreen}
                open={props.openNotification}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{""}</DialogTitle>
                <DialogContent>
                    <h3>Send Notification</h3>
                </DialogContent>
                <div><p className="error-msg">{errorMessage}</p></div>
                {showRecipients && recipientsData.length > 0 ? displayRecipients(recipientsData) :
                    <Fragment>
                        <TextField
                            className="notification-text"
                            value={teacher}
                            label="Email Address"
                            required
                            id="outlined-required"
                            variant="outlined"
                            onChange={(e) => handleInput(e, setTeacher)}
                        />
                        <TextField
                            value={notification}
                            onChange={(e) => handleInput(e, setNotification)}
                            className="notification-text"
                            placeholder="Write message"
                            id="outlined-required"
                            variant="outlined"
                            multiline={true}
                            rows={3}
                            rowsMax={4}
                        />
                        <DialogActions>
                            <Button autoFocus variant="outlined" color="primary" onClick={handleSend}>
                                Send
          </Button>
                            <Button onClick={props.closeNotificationPanel} variant="outlined" color="secondary" autoFocus>
                                Cancel
          </Button>
                        </DialogActions>
                    </Fragment>}
            </Dialog>
        </div>
    );
}