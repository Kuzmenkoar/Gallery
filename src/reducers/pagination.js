import	{
    getNewPagination
}	from	'../constants/pagination'

const initialState = {
    pagination :  1
};

export	default	function pagination (state	=	initialState, action) {
    switch (action.type) {
        case getNewPagination:
            return {...state, pagination: action.payload};
        default:
            return state;
    }
}
