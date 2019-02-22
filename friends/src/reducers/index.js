import { FETCHING_FRIENDS, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

function reducer (state = initialState, action) {
    console.log('reducer', action)
    switch(action.type) {
        case FETCHING_FRIENDS:

            return {
            ...state,
            fetchingFriends: true,
            error:
                "Loading..."
        }

        case FETCHING_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            fetchingFriends: false,
            error: "Success!"
        }

        case FETCHING_FAILURE:
        return {
            ...state,
            fetchingFriends: false,
            error: action.payload
        }

    default:
        return state
    }
} 

export default reducer; 