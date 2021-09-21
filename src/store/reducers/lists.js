const initialState = {
  lists: [],
  errorMsg: '',
};

const ListsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_LIST': {
      return {
        ...state,
        lists: action.payload,
      };
    }

    case 'GET_LIST_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default ListsReducer;
