import {
  DELETE_NOTE,
  GET_ID,
  GET_NOTE,
  MARK_DONE,
  MARK_UNDONE,
} from '../../common/type';

export const getNote = data => {
  return {
    type: GET_NOTE,
    payload: data,
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

export const markNote = id => {
  return {
    type: MARK_DONE,
    payload: id,
  };
};

export const markUndone = id => {
  return {
    type: MARK_UNDONE,
    payload: id,
  };
};

export const getId = id => {
  return {
    type: GET_ID,
    payload: id,
  };
};
