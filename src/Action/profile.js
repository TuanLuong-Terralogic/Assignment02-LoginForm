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

export const changePassword =  (password) => async dispatch => {
  const config = {
    Headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await api.post('changePassword', config, password);

    dispatch({
      type: Type.CHANGEPASSWORD_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    // const err = error.response.error.msg;

    dispatch({
      type: Type.CHANGEPASSWORD_FAIL
    })
  }

}