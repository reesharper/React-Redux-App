import { FETCHING_PIC_START, FETCHING_PIC_SUCCESS, FETCHING_PIC_FAIL} from './../actions';

const initialState = {
  image: '',
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    case(FETCHING_PIC_START):
      return({
        ...state,
        isFetching: true,
        error: ''
      });

    case(FETCHING_PIC_SUCCESS):
      return({
        ...state,
        image: action.payload,
        isFetching: false
      })

    case(FETCHING_PIC_FAIL):
      return({
        ...state,
        isFetching: false,
        error: action.payload
      })

    default:
      return state
  }
}