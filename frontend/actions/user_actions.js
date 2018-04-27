import * as APIutil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';

export const fetchUser = id => dispatch => {
  dispatch(startLoadingUser());
  setTimeout(() => {
    return APIutil.fetchUser(id)
    .then(serverUser => dispatch(receiveUser(serverUser)));
  },2000);
};

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});
