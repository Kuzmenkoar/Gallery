import React,	{	Component, PropTypes	}	from	'react'
import './details.scss'

export	default	class	Details	extends	Component	{
    render()	{
        const data = this.props.dataList;

        return <div>
            <figure className='details-figure'>
                <img className='details-figure__img' src={require('./image1.png')} alt='error'/>
            </figure>
            <h1 className='details__h'> Додаткова інформація</h1>
            <ul className='details-list'>
                <li className='details-list__item'>
                    <p className='details-list__detail'>Назва картини:</p>
                    <p className='details-list__info'>{data.name}</p>
                </li>
                <li className='details-list__item'>
                    <p className='details-list__detail'>Розміри картини:</p>
                    <p className='details-list__info'>{data.dimensions}</p>
                </li>
                <li className='details-list__item'>
                    <p className='details-list__detail'>Ціна:</p>
                    <p className='details-list__info'>{data.price}</p>
                </li>
                <li className='details-list__item'>
                    <p className='details-list__detail'>Дата створення:</p>
                    <p className='details-list__info'>{data.dataCreate}</p>
                </li>
                <li className='details-list__item'>
                    <p className='details-list__detail'>В наявності:</p>
                    <p className='details-list__info'>{data.owned === false ? 'Продано' : 'Так'}</p>
                </li>
            </ul>
        </div>
    }
}
Details.propTypes	= {
    dataList: PropTypes.object.isRequired
};







