import	{
    getContactConteiner,
    getShopConteiner,
    getGalleryConteiner
}	from	'../constants/menu'

const initialState = {
    container : ''
};

export	default	function menu (state	=	initialState, action) {
    switch (action.type) {
        case    getContactConteiner:
            return {...state, container: action.payload};
        case    getShopConteiner:
            return {...state, container: action.payload};
        case    getGalleryConteiner:
            return {...state, container: action.payload};
        default:
            return state;
    }
}
