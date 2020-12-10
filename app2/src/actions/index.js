import axios from 'axios';

export const FETCHING_PIC_START = 'FETCHING_PIC_START'
export const FETCHING_PIC_SUCCESS = 'FETCHING_PIC_SUCCESS'
export const FETCHING_PIC_FAIL = 'FETCHING_PIC_FAIL'

export const getPics = () => {

  return(dispatch => {

    dispatch({type:FETCHING_PIC_START})

    axios
      .get('https://picsum.photos/600')
      .then(res => {
        dispatch({type:FETCHING_PIC_SUCCESS, payload:'https://picsum.photos/600'})
      })
      .catch(err => {
        dispatch({type:FETCHING_PIC_FAIL, payload:err.response.message})
      })

  })

}