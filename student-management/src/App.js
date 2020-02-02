import React, { useState } from 'react';
import NavigationBar from './components/partials/NavigationBar';
import SearchTeacher from './components/teacher/SearchTeacher';
import StudentList from './components/student/ListStudents';
import RegisterModal from './components/teacher/RegisterModal';

function App() {
  const [ openDialog, setOpenDialog ]= useState(false);
  const openModal = () => {
    setOpenDialog(true);
  }
  const closeModal = () => {
    setOpenDialog(false);
  }
  return (
    <div>
      <NavigationBar openModal={openModal}/>
      <div className="search-center-div">
        <SearchTeacher />
      </div>
      <div style={{'top': '25%','width': '100%', 'position': 'absolute'}}>
        <StudentList />
      </div>
      <RegisterModal openDialog={openDialog} closeModal={closeModal} />
    </div>
  );
}

export default App;
