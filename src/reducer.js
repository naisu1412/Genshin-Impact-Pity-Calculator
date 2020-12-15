export const initialState = {

};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "test":
            return "";

        default:
            return state;
    }
};

export default reducer;
