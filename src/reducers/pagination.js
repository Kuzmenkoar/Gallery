import	{
    getNextPagin,
    getPrevPagin,
    getNewPagination
}	from	'../constants/pagination'

const initialState = {
    pagination :  1
};

export	default	function pagination (state	=	initialState, action) {
    switch (action.type) {
        case getNewPagination:
            return {...state, pagination: action.payload};
        case getNextPagin:
            return {...state, pagination: action.payload};
        case getPrevPagin:
            return {...state, pagination: action.payload};
        default:
            return state;
    }
}
