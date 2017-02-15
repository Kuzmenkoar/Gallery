import	{
    getNewPagination
}	from	'../constants/pagination'

export	function	getPagination(number)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getNewPagination,
            payload: number
        });
    }
}
