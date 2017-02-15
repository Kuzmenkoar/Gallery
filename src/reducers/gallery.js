import	{
    getDataGallery,
    getDetailOfPaint
}	from	'../constants/gallery'
import database from '../../database/gallery.json';

const initialState = {
    list : database
};

export	default	function gallery (state	=	initialState, action) {
    switch (action.type) {
        case getDataGallery:
            return {...state, list: action.payload};
        case getDetailOfPaint:
            return {...state, id: action.payload};
        default:
            return state;
    }
}
