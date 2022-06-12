export const initialState = {
    playlists: []
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
};

export default reducer;