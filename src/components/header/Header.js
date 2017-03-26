import	React,	{	Component	}	from	'react'
import  './header.scss'

export	default	class	Header	extends	Component	{
    getShopConteiner(){
        this.props.getContainer('Shop')
    }
    getContactConteiner(){
        this.props.getContainer('Contact')
    }
    getGalleryContainer(){
        this.props.getContainer('Gallery')
    }
    getInformationContainer(){
        this.props.getContainer('Information')
    }



    render()	{
        return <header id='top' className='header'>
                <div className='header-top'>
                    <p className='header-top__logo'> Grand<span className='header-top__logo_color'>MA</span></p>
                    <nav className='menu'>
                        <ul className='menu-list'>
                            <li className='menu-list__li' onClick={::this.getInformationContainer}> Про художника </li>
                            <li className='menu-list__li' onClick={::this.getGalleryContainer}> Галерея картин </li>
                            {/*<li className='menu-list__li' onClick={::this.getShopConteiner}> Доступні на продаж </li>*/}
                            <li className='menu-list__li' onClick={::this.getContactConteiner}> Контакти </li>
                        </ul>
                    </nav>
                </div>
                <div className='header-bottom'>
                    <p className='header-bottom__page'>Gallery</p>
                    <nav className='breadcrumbs'>
                        <p className='breadcrumbs__general'>pages</p>
                        <p className='breadcrumbs__elem'>gallery</p>
                    </nav>
                </div>
            </header>
    }
}






