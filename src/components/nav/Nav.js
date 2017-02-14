import	React,	{	Component	}	from	'react'
import  './nav.scss'

export	default	class	Nav	extends	Component	{
    render()	{
        return <nav className='nav-menu'>
            <ul className='nav-menu-list'>
                <li className='nav-menu-list__li'> Головна </li>
                <li className='nav-menu-list__li'> Доступні на продаж </li>
                <li className='nav-menu-list__li'> Галерея картин </li>
            </ul>
        </nav>
    }
}





