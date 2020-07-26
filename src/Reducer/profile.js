import * as Types from '../Constant/profile';

const initState = {
  loading: null
}

const profile = (state = initState, action) => {
  switch (action.type) {
    case Types.UPLOAD_SUCCESS:
      return {
        ...state,
      }
    default:
      return state;
  }
}