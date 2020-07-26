import * as Types from '../Constant/profile';
import api from '../Api';

export const uploadAvatar = async (avatar) => dispatch => {
  const config = {
    Headers: {
      'Content-Type': 'multipart/form-data',

    }
  };

  // const body = ;

  try {
    const res = api.post('upload', config, body);

    dispatch({

    })
  } catch (error) {

  }
}

export const changePassword = async (password) => dispatch => {
  const config = {
    Headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await api.post('changePassword', config, password);

    dispatch({
      type: Types.CHANGEPASSWORD_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    const err = error.response.error.msg;

    dispatch({
      type: Types.CHANGEPASSWORD_FAIL
    })
  }

}