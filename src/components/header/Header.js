import	React,	{	Component	}	from	'react'
import  './header.scss'

export	default	class	Header	extends	Component	{
    render()	{
        return <header className='header'>
                <img className='header__logo' src={require( './logo2.png')} alt='logoError'/>
                    <span className='header__h'> Картинна галерея </span>
                    <div className='header-contact'>
                        <h3 className='header-contact__h'> Телефони:</h3>
                        <p  className='header-contact__phone'> <span className='header-contact__phone_red'>(067)</span>-44-00-693 </p>
                        <p className='header-contact__phone'> <span className='header-contact__phone_red'>(063)</span>-63-50-604 </p>
                        <p className='header-contact__phone'> <span className='header-contact__phone_red'>(063)</span>-63-50-604 </p>
                    </div>
            </header>
    }
}






