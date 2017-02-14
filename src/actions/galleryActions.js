//import axios from 'axios';
import database from '../../database/gallery.json';

import	{
    getDataGallery
}	from	'../constants/gallery'

export	function	getDataGal()	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getDataGallery,
            payload: database
        });
        //axios.get('http://localhost/gallery/json/database.json')
        //    .then(res => {
        //        const database = res.data;

        //    });
    }
}