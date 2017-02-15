import	{
    getNewPagination,
    getPrevPagin,
    getNextPagin
}	from	'../constants/pagination'

export	function	getPagination(number)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getNewPagination,
            payload: number
        });
    }
}

export function getNextPagination(number) {
    return	(dispatch)	=>	{

        dispatch({
            type:    getNextPagin,
            payload: number
        });
    }
}

export function getPrevPagination(number) {
    return	(dispatch)	=>	{

        dispatch({
            type:    getPrevPagin,
            payload: number
        });
    }
}
