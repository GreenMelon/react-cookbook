import axios from 'axios';

export const GET_USER = "user/GET_USER";

export function getUser () {
    return dispatch => {
        axios.post('/api/user').then((res) => {
            const data = JSON.parse(res.request.responseText);
            dispatch({
                type: GET_USER,
                payload: data,
            });
        });
    }
}
