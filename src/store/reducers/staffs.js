const initialState = {
    staffs: [],
    errorMsg: '',
  };
  
  const StaffsReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'GET_LIST': {
        return {
          ...state,
          staffs: action.payload,
        };
      }
  
      case 'GET_LIST_MESSAGE': {
        return {
          ...state,
          errorMsg: action.payload,
        };
      }

      case 'GET_DETAIL': {
        return {
          ...state,
          staff: action.payload,
        };
      }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default StaffsReducer;