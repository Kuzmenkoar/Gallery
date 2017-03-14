import	{
    RECV_DATA,
    //REQ_DATA,
    RECV_ERROR,
    getDetailOfPaint,
}	from	'../constants/gallery'
//import database from '../../database/gallery.json';
//import axios from 'axios';

const initialState = {
    list: []
};

export	default	function gallery (state	=	initialState, action) {
    switch (action.type) {
        case getDetailOfPaint:
            return {...state, id: action.payload};
        case RECV_ERROR:
            return Object.assign({}, state, {isLoading: false, list: action.data, error: true});
        case RECV_DATA:
            return {...state, list: action.data};
        default:
            return state;
    }
}
