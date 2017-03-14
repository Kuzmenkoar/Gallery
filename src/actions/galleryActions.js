import axios from 'axios';
//import database from '../../database/gallery.json';

import	{
    RECV_DATA,
    RECV_ERROR,
    //REQ_DATA,
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


function receiveData(json) {
    return{
        type: RECV_DATA,
        data: json
    }
}

function receiveError(json) {
    return {
        type: RECV_ERROR,
        data: json
    }
}

export function getData(start, range) {
    return function(dispatch) {
        return axios({
            url: 'http://localhost:3000/gallery?start=' + start + '&range=' +range,
            //timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(receiveData(response.data));
            })
            .catch(function(response){
                dispatch(receiveError(response.data));
                dispatch((null,'/error'));
            })
    }
}

