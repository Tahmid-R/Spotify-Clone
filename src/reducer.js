export const initialState = {
    user: null,
    playlist : [],
    playing : false,
    item : null,
    token: null,


};

//action has two forms - type (set user) and payload (user)
//action type could be set user

const reducer = (state, action) => {
    //debugging tool
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                //...state keeps what is in the current state, avoids overwriting
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

            default: 
                return state;

    }

}

export default reducer;

