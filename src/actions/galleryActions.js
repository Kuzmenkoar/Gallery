//import axios from 'axios';
//import database from '../../database/gallery.json';

import	{
    //getDataGallery,
    getDetailOfPaint
}	from	'../constants/gallery'

export	function	getDetails(number)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getDetailOfPaint,
            payload: number
        });
    }
}
//axios.get('http://localhost/gallery/json/database.json')
//    .then(res => {
//        const database = res.data;

//    });
