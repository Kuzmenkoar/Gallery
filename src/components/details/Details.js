import React,	{	Component, PropTypes	}	from	'react'
import './details.scss'

export	default	class	detail	extends	Component	{
    render()	{
        const data = this.props.dataList;

        return <div className='detail'>
            <figure className='detail-figure'>
                <img className='detail-figure__img' src={require('./image1.png')} alt='error'/>
            </figure>
            <aside className='detail-sidebar'>
                <div className='sidebar-phone'>
                    <h1 className='sidebar-phone__header'>Contacts</h1>
                    <ul className='sidebar-phone__list'>
                        <li className='sidebar-phone__item'>
                            <span className='sidebar-phone__item_img'> </span>
                            <span className='sidebar-phone__number'>067-44-00-693</span>
                        </li>
                        <li className='sidebar-phone__item'>
                            <span className='sidebar-phone__item_img'> </span>
                            <span className='sidebar-phone__number'>067-44-00-693</span>
                        </li>
                        <li className='sidebar-phone__item'>
                            <span className='sidebar-phone__item_img'> </span>
                            <span className='sidebar-phone__number'>067-44-00-693</span>
                        </li>
                    </ul>
                </div>
                <div className='sidebar-information'>
                    <h1 className='sidebar-information__header'>Information</h1>
                    <ul className='sidebar-information__list'>
                        <li className='sidebar-information__item'>
                            <p className='sidebar-information__detail'>Назва картини:</p>
                            <p className='sidebar-information__info'>{data.name}</p>
                        </li>
                        <li className='sidebar-information__item'>
                            <p className='sidebar-information__detail'>Розміри картини:</p>
                            <p className='sidebar-information__info'>{data.dimensions}</p>
                        </li>
                        <li className='sidebar-information__item'>
                            <p className='sidebar-information__detail'>Ціна:</p>
                            <p className='sidebar-information__info'>{data.price}</p>
                        </li>
                        <li className='sidebar-information__item'>
                            <p className='sidebar-information__detail'>Дата створення:</p>
                            <p className='sidebar-information__info'>{data.dataCreate}</p>
                        </li>
                        <li className='sidebar-information__item'>
                            <p className='sidebar-information__detail'>В наявності:</p>
                            <p className='sidebar-information__info'>{data.owned === false ? 'Продано' : 'Так'}</p>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    }
}
detail.propTypes	= {
    dataList: PropTypes.object.isRequired
};







