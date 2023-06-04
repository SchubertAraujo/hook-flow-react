import * as types from './types';

export const reducer = (state, action) => {
  switch (action.types) {
    case types.POSTS_SUCCESS:
      return { ...state, repos: action.payload };
  }
  console.log('action nao econtrada');
  return { ...state };
};
