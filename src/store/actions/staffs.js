import { default as axios } from 'axios'

export const getStaff = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/staffs`);
      dispatch({
        type: 'GET_LIST',
        payload: results.data.data.staffs,
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