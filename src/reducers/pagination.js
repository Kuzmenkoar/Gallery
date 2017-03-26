import	{
    getNewPagination,
    RECV_LENGTH_ERR,
    RECV_LENGTH
}	from	'../constants/pagination'

const initialState = {
    pagination :  1,
    countElements : false,
    viewElem: 8
};

export	default	function pagination (state	=	initialState, action) {
    switch (action.type) {
        case getNewPagination:
            return {...state, pagination: action.payload};
        case RECV_LENGTH_ERR:
            return Object.assign({}, state, {isLoading: false, countElements: action.data, error: true});
        case RECV_LENGTH:
            return {...state, countElements: action.data.length};
        default:
            return state;
    }
}
