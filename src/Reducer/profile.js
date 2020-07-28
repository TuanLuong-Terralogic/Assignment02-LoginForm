import * as Types from '../Constant/profile';

const initState = {
  profile: {},
  msg: '',
  loading: null
}

const profile = (state = initState, action) => {
  switch (action.type) {
    case Types.PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      }
    case Types.UPLOAD_SUCCESS:
      return {
        ...state,
        ...action.payload,
        msg: action.payload.msg,
        loading: false
      }
    case Types.UPLOAD_FAIL:
      return {
        ...state,
        ...action.payload,
        msg: action.payload,
        loading: false
      }
    case Types.CHANGEPASSWORD_SUCCESS:
      return {
        ...state,
        ...action.payload,
        msg: action.payload.msg,
        loading: false
      }
    case Types.CHANGEPASSWORD_FAIL:
      return {
        ...state,
        ...action.payload,
        loading: false,
        msg: action.payload
      }

    case Types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        msg: action.payload.msg
      }
    case Types.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        ...action.payload,
        loading: false,
        msg: action.payload
      }

    default:
      return state;
  }
}

export default profile;