import * as Types from '../Constant/profile';

const initState = {
  profile: {},
  loading: null
}

const profile = (state = initState, action) => {
  switch (action.type) {
    case Types.PROFILE_ERROR:
      return{
        ...state,
        loading: false,
      }
    case Types.UPLOAD_SUCCESS:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default profile;