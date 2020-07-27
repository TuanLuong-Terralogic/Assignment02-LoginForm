import * as Type from '../Constant/profile';
import api from '../Api';


export const uploadAvatar = async (avatar) => dispatch => {
  // const config = {
  //   Headers: {
  //     'Content-Type': 'multipart/form-data',

  //   }
  // };

  // const body = ;

  try {
    // const res = api.post('upload', config, avatar);

    dispatch({

    })
  } catch (error) {

  }
}

export const changePassword = (password, currentPassword) => async dispatch => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const body = JSON.stringify({ password, currentPassword });

  try {
    const res = await api.post('changePassword', config, body);

    dispatch({
      type: Type.CHANGEPASSWORD_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    const err = error.response.errors.msg;
    console.log(err);

    dispatch({
      type: Type.CHANGEPASSWORD_FAIL,
      payload: err
    })
  }

}