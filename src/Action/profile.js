import * as Type from '../Constant/profile';
import api from '../Api';
import Swal from 'sweetalert2';

export const uploadAvatar = async (file) => dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'bearer ' + token
    }
  };

  const body = new FormData();
  body.append('image', file)

  try {
    const res = api.post('upload', body, config);

    dispatch({
      type: Type.UPLOAD_SUCCESS,
      payload: res.data
    });

    dispatch(() => {
      Swal.fire({
        icon: 'success',
        title: res.data.msg,
        showConfirmButton: true
      });
    })
  } catch (error) {
    const errors = error.response.data;
    dispatch({
      type: Type.UPLOAD_FAIL
    });
    dispatch(() => {
      Swal.fire({
        icon: 'error',
        title: errors,
        showConfirmButton: true
      })
    })
  }
}

// change password
export const changePassword = (password, currentPassword) => async dispatch => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + token
    }
  }

  const body = JSON.stringify({ password, currentPassword });

  try {
    const res = await api.post('changePassword', body, config)

    dispatch({
      type: Type.CHANGEPASSWORD_SUCCESS,
      payload: res.data
    })
    dispatch(() => {
      Swal.fire({
        icon: 'success',
        title: res.data.msg,
        showConfirmButton: true
      })
    })
  } catch (error) {
    const err = error.response.data;
    dispatch(() => {
      Swal.fire({
        icon: 'error',
        title: err,
        showConfirmButton: true
      })
    })
    dispatch({
      type: Type.CHANGEPASSWORD_FAIL,
      payload: err
    })
  }
}

// update profile information
export const updateProfile = (email, name, phone) => async dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + token
    }
  }

  const body = JSON.stringify({ email, name, phone });

  try {
    const res = await api.patch('update', body, config);

    dispatch({
      type: Type.UPDATE_PROFILE_SUCCESS,
      payload: res.data
    });

    dispatch(() => {
      Swal.fire({
        icon: 'success',
        title: res.data.msg,
        showConfirmButton: true
      })
    })
  } catch (error) {
    const err = error.response.data;

    dispatch({
      type: Type.CHANGEPASSWORD_FAIL,
    });
    dispatch(() => {
      Swal.fire({
        icon: 'error',
        title: error,
        showConfirmButton: true
      })
    })
  }

}