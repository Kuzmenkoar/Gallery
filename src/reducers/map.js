import	{
    getZhytomyrskaCoord,
    getDruzhbyNarodivCoord,
    getAkademmistechkoCoord
}	from	'../constants/map'

const initialState = {
    zoom : 15,
    center: {lat: 50.4560768, lng: 30.3649982},
    zhytomyrska: {lat: 50.4560768, lng: 30.3649982},
    druzhbyNarodiv: {lat: 50.4165508, lng: 30.5442092},
    akademmistechko: {lat: 50.4650224, lng: 30.3527819}
};

export	default	function map (state	=	initialState, action) {
    switch (action.type) {
        case    getZhytomyrskaCoord:
            return {...state, center: action.payload};
        case    getDruzhbyNarodivCoord:
            return {...state, center: action.payload};
        case    getAkademmistechkoCoord:
            return {...state, center: action.payload};
        default:
            return state;
    }
}
