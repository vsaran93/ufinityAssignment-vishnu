import React from 'react';
import NavigationBar from './components/partials/NavigationBar';
import SearchTeacher from './components/teacher/SearchTeacher';
import StudentList from './components/student/ListStudents';

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="search-center-div">
        <SearchTeacher />
      </div>
      <div style={{'top': '25%','width': '100%', 'position': 'absolute'}}>
        <StudentList />
      </div>
    </div>
  );
}

export default App;
