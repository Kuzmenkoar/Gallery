import	React,	{	Component	}	from	'react'
import  './nav.scss'

export	default	class	Nav	extends	Component	{
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
        window.onscroll = function() {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;

            scrolled>=80 ? document.getElementsByClassName('nav-menu')[0].classList.add('nav-menu_fixed')
                : document.getElementsByClassName('nav-menu')[0].classList.remove('nav-menu_fixed');
        };

        return <nav className='nav-menu'>

            <ul className='nav-menu-list'>
                <li className='nav-menu-list__li' onClick={::this.getInformationContainer}> Про художника </li>
                {/*<li className='nav-menu-list__li' onClick={::this.getShopConteiner}> Доступні на продаж </li>*/}
                <li className='nav-menu-list__li' onClick={::this.getGalleryContainer}> Галерея картин </li>
                <li className='nav-menu-list__li' onClick={::this.getContactConteiner}> Контакти </li>
            </ul>
        </nav>
    }
}





