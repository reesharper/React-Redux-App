import { FETCH_JOKES_START, FETCH_JOKES_SUCCESS, FETCH_JOKES_FAILURE } from '../actions/actions'

const initialState = {
  isLoading: false,
  jokeData: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokeData: action.payload
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
