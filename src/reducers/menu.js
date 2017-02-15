import	{
    getNewContainer
}	from	'../constants/menu'

const initialState = {
    container : ''
};

export	default	function menu (state	=	initialState, action) {
    switch (action.type) {
        case    getNewContainer:
            return {...state, container: action.payload};
        default:
            return state;
    }
}
