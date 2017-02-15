import	{
    getZhytomyrskaCoord,
    getDruzhbyNarodivCoord,
    getAkademmistechkoCoord
}	from	'../constants/map'

export	function	getZhytomyrska(coordination)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getZhytomyrskaCoord,
            payload: coordination
        });
    }
}

export	function	getDruzhbyNarodiv(coordination)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getDruzhbyNarodivCoord,
            payload: coordination
        });
    }
}

export	function	getAkademmistechko(coordination)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getAkademmistechkoCoord,
            payload: coordination
        });
    }
}