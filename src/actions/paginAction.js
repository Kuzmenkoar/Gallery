import axios from 'axios';
import	{
    getNewPagination,
    RECV_LENGTH,
    RECV_LENGTH_ERR
}	from	'../constants/pagination'

export	function	getPagination(number)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getNewPagination,
            payload: number
        });
    }
}


function receiveData(json) {
    return{
        type: RECV_LENGTH,
        data: json
    }
}

function receiveError(json) {
    return {
        type: RECV_LENGTH_ERR,
        data: json
    }
}

export function getLength() {
    return function(dispatch) {
        return axios({
            url: 'http://localhost:3000/gallery/length',
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
