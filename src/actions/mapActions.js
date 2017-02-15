import	{
    getNewCoordination
}	from	'../constants/map'

export	function	getCoordination(coordination)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getNewCoordination,
            payload: coordination
        });
    }
}