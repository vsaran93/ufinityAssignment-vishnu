import { UPDATE_USER_LIST, SUSPEND_USER } from '../../utils/actionType';

let initialState = {
    studentList: []
}

const UserReducer = (state = initialState, action) => {
    let current = Object.assign({}, state);
    switch (action.type) {
        case UPDATE_USER_LIST:
            current.studentList = action.data;
            break;
        case SUSPEND_USER:
            let currentStudents = current.studentList;
            let findStudent = currentStudents.find(a => a.Email === action.data);
            findStudent.IsSuspended = 1;
            current.studentList = [...currentStudents];
            break;
        default:
            return state;
    }
    return current;
}

export default UserReducer;