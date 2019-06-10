import { GET_USER } from 'actions/user';

const initState = {
    user: {},
};

export default function reducer (state = initState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
