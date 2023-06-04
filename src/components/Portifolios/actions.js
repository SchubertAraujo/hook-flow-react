import * as types from './types';

export const loadRepository = async (dispatch) => {
  const repository = await fetch(
    'https://api.github.com/users/schubertaraujo/repos',
  );
  const repositoryJson = await repository.json();

  return dispatch({ type: types.POSTS_SUCCESS, payload: repositoryJson });
};
