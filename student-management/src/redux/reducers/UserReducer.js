import { UPDATE_USER_LIST } from '../../utils/actionType';

let initialState = {
    studentList: []
}

const UserReducer = (state = initialState, action) => {
    let current = Object.assign({}, state);
    switch (action.type) {
        case UPDATE_USER_LIST:
            current.studentList = action.data;
            break;
        default:
            return state;
    }
    return current;
}

export default UserReducer;