import	React,	{	Component	}	from	'react'
import  './contact.scss'

export	default	class	Contact	extends	Component	{
    getZhytomyrskaCoord(){
        this.props.getZhytomyrska({lat: 50.4560768, lng: 30.3649982})
    }
    getDruzhbyNarodivCoord(){
        this.props.getZhytomyrska({lat: 50.4165508, lng: 30.5442092})
    }
    getAkademmistechkoCoord(){
        this.props.getZhytomyrska({lat: 50.4650224, lng: 30.3527819})
    }

    render()	{
        return <section className='contact'>
            <h1 className='contact__h'>Телефони:</h1>
            <ul className='contact-phone'>
                <li className='contact-phone__item'>
                    <span className='contact-phone_red'>(067)</span>-44-00-693
                </li>
                <li className='contact-phone__item'>
                    <span className='contact-phone_red'>(067)</span>-44-00-693
                </li>
                <li className='contact-phone__item'>
                    <span className='contact-phone_red'>(067)</span>-44-00-693
                </li>
            </ul>
            <h1 className='contact__h'>Можливі місця перебування:</h1>
            <ul className='contact-addressList'>
                <li className='contact-addressList__item' onClick={::this.getDruzhbyNarodivCoord}>
                    <span className='contact-addressList__metro'>M</span>
                    <span className='contact-addressList__span'>Дружба народів</span>
                </li>
                <li className='contact-addressList__item' onClick={::this.getZhytomyrskaCoord}>
                    <span className='contact-addressList__metro'>M</span>
                    <span className='contact-addressList__span'>Житомирська</span>
                </li>
                <li className='contact-addressList__item' onClick={::this.getAkademmistechkoCoord}>
                    <span className='contact-addressList__metro'>M</span>
                    <span className='contact-addressList__span'>Академмістечко</span>
                </li>
            </ul>
        </section>
    }
}





