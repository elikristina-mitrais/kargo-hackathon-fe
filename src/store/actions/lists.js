import { default as axios } from 'axios'

export const getList = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/lists`);
      dispatch({
        type: 'GET_LIST',
        payload: results.data.data.lists,
      });
    } catch (err) {
      const { message } = err;
      dispatch({
        type: 'GET_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};

export const getListDetails = (id) => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/lists/${id}`);
      dispatch({
        type: 'GET_LIST_DETAILS',
        payload: results.data.data.list,
      });
    } catch (err) {
      const { message } = err;
      dispatch({
        type: 'GET_LIST_DETAILS_MESSAGE',
        payload: message,
      });
    }
  };
};
