import * as Type from '../Constant/profile';
import api from '../../Api';
import Swal from 'sweetalert2';
// import jwt from 'jsonwebtoken';
import { localSave } from '../../Utils/LocalSave';

const token = localStorage.getItem('token');
// const userLocal = jwt.decode(token);
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + token
  }
};

export const uploadAvatar = (image) => async dispatch => {

  const formData = new FormData();
  formData.append('image', image);

  try {
    const res = await api.post('upload', formData, config);

    dispatch({
      type: Type.UPLOAD_SUCCESS,
      payload: 'http://api.terralogic.ngrok.io/' + res.data.data
    });

    dispatch(() => {
      Swal.fire({
        icon: 'success',
        title: res.data.msg,
        showConfirmButton: true
      });
    })
  } catch (error) {
    const errors = error.response;
    console.log(errors)
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
export const changePassword = ({ password, currentPassword }) => async dispatch => {
  // const token = localStorage.getItem('token');

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'bearer ' + token
  //   }
  // }

  console.log(password, currentPassword);

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
export const updateProfile = ({ email, name, phone, avatar }) => async dispatch => {

  try {
    // userLocal.email = email;
    // userLocal.name = name;
    // userLocal.phone = phone;
    // userLocal.avartar = avatar;

    const body = JSON.stringify({ email, name, phone, avatar });

    const res = await api.patch('update', body, config);

    dispatch({
      type: Type.UPDATE_PROFILE_SUCCESS,
      payload: res.data
    });

    dispatch(() => {
      localSave(res.data);
    })

    dispatch(() => {
      Swal.fire({
        icon: 'success',
        title: res.data.msg,
        showConfirmButton: true
      })
    });


  } catch (error) {
    const err = error.response.data;

    dispatch({
      type: Type.CHANGEPASSWORD_FAIL,
    });
    dispatch(() => {
      Swal.fire({
        icon: 'error',
        title: err,
        showConfirmButton: true
      })
    })
  }

}

// update all
export const updateAll = ({ email, name, phone, avatar, password, currentPassword }) => async dispatch => {

  const res1 = updateProfile({ email, name, phone, avatar });
  const res2 = changePassword({ password, currentPassword });

  try {
    const resAll = await Promise.all(res1, res2);

    dispatch({
      type: Type.UPDATE_PROFILE_SUCCESS,
      payload: resAll.data
    })


  } catch (error) {
    dispatch({
      type: Type.UPDATE_PROFILE_FAIL,
    })
  }
}
