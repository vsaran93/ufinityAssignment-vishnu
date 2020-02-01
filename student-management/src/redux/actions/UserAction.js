import { UPDATE_USER_LIST } from '../../utils/actionType';

export const updateStudentList = (data) => ({
    type: UPDATE_USER_LIST,
    data: data
});