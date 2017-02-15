import	{
    getNewContainer,
}	from	'../constants/menu'

export	function	getContainer(container)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getNewContainer,
            payload: container
        });
    }
}