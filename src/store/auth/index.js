import { REGISTER_SUCCESS, REQUEST_ACTION } from './actionTypes';
import http from '../../utils/http';

export const registerUser = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const requestAction = () => ({
  type: REQUEST_ACTION,
});

export const registerAction = user => async dispatch => {
  dispatch(requestAction());
  try {
    const { data } = await http.post('/register', user);
    dispatch(registerUser(data));
  } catch ({error}) {
    console.log(error);
  }
};

export const initialState = {
  data: {},
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_ACTION:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
      default:
        return state
  }
}

export default reducer;
