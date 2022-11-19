import {GET_ID} from '../../common/type';

const initState = null;

const idReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_ID:
      return action.payload;

    default:
      return state;
  }
};

export default idReducers;
