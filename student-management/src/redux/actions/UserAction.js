import { UPDATE_USER_LIST, SUSPEND_USER } from '../../utils/actionType';

export const updateStudentList = (data) => ({
    type: UPDATE_USER_LIST,
    data: data
});


export const suspendedStudent = (data) => ({
    type: SUSPEND_USER,
    data: data
})