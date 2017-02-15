import	React,	{	Component	}	from	'react'
import  './nav.scss'

export	default	class	Nav	extends	Component	{
    getShopConteiner(){
        this.props.getShop('Shop')
    }
    getContactConteiner(){
        this.props.getContact('Contact')
    }

    render()	{
        return <nav className='nav-menu'>
            <ul className='nav-menu-list'>
                <li className='nav-menu-list__li'> Головна </li>
                <li className='nav-menu-list__li' onClick={::this.getShopConteiner}> Доступні на продаж </li>
                <li className='nav-menu-list__li'> Галерея картин </li>
                <li className='nav-menu-list__li' onClick={::this.getContactConteiner}> Контакти </li>
            </ul>
        </nav>
    }
}





