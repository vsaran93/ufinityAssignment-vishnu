import React, { useState } from 'react';
import NavigationBar from './components/partials/NavigationBar';
import SearchTeacher from './components/teacher/SearchTeacher';
import StudentList from './components/student/ListStudents';
import RegisterModal from './components/teacher/RegisterModal';
import SendNotification from './components/teacher/SendNotification';
import Button from '@material-ui/core/Button';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const openModal = () => {
    setOpenDialog(true);
  }
  const closeModal = () => {
    setOpenDialog(false);
  }
  const openNotificationPanel = () => {
    setOpenNotification(true)
  }
  const closeNotificationPanel = () => {
    setOpenNotification(false)
  }
  return (
    <div>
      <NavigationBar openModal={openModal} />
      <div className="search-center-div">
        <SearchTeacher />
        <div>
          <Button className="notification-button" color="primary" onClick={openNotificationPanel} variant="contained">Send Notification</Button>
        </div>
      </div>
      <div style={{ 'top': '30%', 'width': '100%', 'position': 'absolute' }}>
        <StudentList />
      </div>
      <RegisterModal openDialog={openDialog} closeModal={closeModal} />
      <SendNotification openNotification={openNotification} closeNotificationPanel={closeNotificationPanel} />
    </div>
  );
}

export default App;
