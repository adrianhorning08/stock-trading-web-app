import * as APIutil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';
export const FINISH_LOADING_USER = 'FINISH_LOADING_USER';

export const fetchUser = id => dispatch => {
  dispatch(startLoadingUser());
  return APIutil.fetchUser(id)
  .then(serverUser => dispatch(receiveUser(serverUser)))
  .then(() => setTimeout(() => dispatch(finishLoadingUser())), 2000);

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

export const finishLoadingUser = () => ({
  type: FINISH_LOADING_USER
});
