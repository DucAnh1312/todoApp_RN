import {DELETE_NOTE, GET_NOTE, MARK_DONE, MARK_UNDONE} from '../../common/type';

const initState = [
  {
    task: ' Chào mừng đến với App ',
    id: 1,
    completed: false,
  },
  {
    task: ' 😘😘😘😘❤❤❤❤',
    id: 2,
    completed: false,
  },
  {
    task: 'App demo mới làm được các tính năng đầu bài ra 😅',
    id: 3,
    completed: false,
  },
  {
    task: ' Learning React 🤔',
    id: 4,
    completed: false,
  },
  {
    task: 'Quét nhà 🤔',
    id: 5,
    completed: false,
  },
  {
    task: 'Rửa bát 🥲 ',
    id: 6,
    completed: false,
  },
  {
    task: 'Giặt quần áo 😐 ',
    id: 7,
    completed: false,
  },
  {
    task: '😥😱😭😭',
    id: 8,
    completed: false,
  },
];

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NOTE:
      const newNote = {
        id: Math.random(),
        task: action.payload,
        completed: false,
      };
      state.push(newNote);
      return [...state];

    case DELETE_NOTE:
      return [...state].filter(item => item.id !== action.payload);

    case MARK_DONE:
      return [...state].map(item => {
        if (item.id == action.payload) {
          return {...item, completed: true};
        }
        return item;
      });

    case MARK_UNDONE:
      return [...state].map(item => {
        if (item.id == action.payload) {
          return {...item, completed: false};
        }
        return item;
      });

    default:
      return [...state];
  }
};

export default noteReducer;
