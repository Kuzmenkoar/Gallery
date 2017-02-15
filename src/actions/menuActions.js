import	{
    getContactConteiner,
    getShopConteiner,
    getGalleryConteiner
}	from	'../constants/menu'

export	function	getContact(container)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getContactConteiner,
            payload: container
        });
    }
}

export	function	getShop(container)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getShopConteiner,
            payload: container
        });
    }
}

export	function	getGallery(container)	{
    return	(dispatch)	=>	{

        dispatch({
            type:    getGalleryConteiner,
            payload: container
        });
    }
}