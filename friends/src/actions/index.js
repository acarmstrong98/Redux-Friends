import axios from 'axios'

export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS })

    axios.get('http://localhost:5000/friends')
    .then(response => {
        dispatch({ type: FETCHING_SUCCESS, payload: response.data})
    })

    .catch(error => {
        console.log(error)
        dispatch({ type: FETCHING_FAILURE, payload: error})
    })
}