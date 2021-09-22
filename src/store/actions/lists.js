import { default as axios } from 'axios'

export const getList = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/lists`);
      console.log(results.data.data.lists)
      dispatch({
        type: 'GET_LIST',
        payload: results.data.data.lists,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};
