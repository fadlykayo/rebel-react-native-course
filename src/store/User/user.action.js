import {Actions} from 'react-native-router-flux';

export default {
  login: data => {
    Actions.home();

    return {
      type: 'LOGIN',
      payload: data,
    };
  },

  getToken: data => {
    return {
      type: 'GET_TOKEN',
      payload: data,
    };
  },

  setId: data => {
    return {
      type: 'SET_ID',
      payload: data,
    };
  },
};
