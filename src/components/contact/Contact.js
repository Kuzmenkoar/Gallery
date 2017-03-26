import	React,	{ Component }	from	'react'
import  './contact.scss'

export	default	class	Contact	extends	Component	{
    getZhytomyrskaCoord(){
        this.props.getCoordination({lat: 50.4560768, lng: 30.3649982})
    }
    getDruzhbyNarodivCoord(){
        this.props.getCoordination({lat: 50.4165508, lng: 30.5442092})
    }
    getAkademmistechkoCoord(){
        this.props.getCoordination({lat: 50.4650224, lng: 30.3527819})
    }

    render()	{
        return <div className='contact'>
            <h1 className='contact__header'>Get in touch</h1>
            <div className='getInTouch'>
                <div className='getInTouch-phone'>
                    <h2 className='getInTouch-phone__header'>
                        <span className='getInTouch-phone__header_img'> </span>
                        Phone
                    </h2>

                    <ul className='getInTouch-phoneList'>
                        <li className='getInTouch-phoneList__item'>
                            <span className='getInTouch-phoneList__item_red'>(067)</span>-44-00-693
                        </li>
                        <li className='getInTouch-phoneList__item'>
                            <span className='getInTouch-phoneList__item_red'>(067)</span>-44-00-693
                        </li>
                        <li className='getInTouch-phoneList__item'>
                            <span className='getInTouch-phoneList__item_red'>(067)</span>-44-00-693
                        </li>
                    </ul>
                </div>
                <div className='getInTouch-address'>
                    <h2 className='getInTouch-address__header'>
                        <span className='getInTouch-address__header_img'> </span>
                        Address
                    </h2>
                    <ul className='getInTouch-addressList'>
                        <li className='getInTouch-addressList__item'>
                            <a className='getInTouch-addressList__item_a' onClick={::this.getDruzhbyNarodivCoord} href='#top'> </a>
                            <span className='getInTouch-addressList__metro'> </span>
                            <span className='getInTouch-addressList__text'>Дружба народів</span>
                        </li>
                        <li className='getInTouch-addressList__item' >
                            <a className='getInTouch-addressList__item_a' onClick={::this.getZhytomyrskaCoord} href='#top'> </a>
                            <span className='getInTouch-addressList__metro'> </span>
                            <span className='getInTouch-addressList__text'>Житомирська</span>
                        </li>
                        <li className='getInTouch-addressList__item'>
                            <a className='getInTouch-addressList__item_a' onClick={::this.getAkademmistechkoCoord} href='#top'> </a>
                            <span className='getInTouch-addressList__metro'> </span>
                            <span className='getInTouch-addressList__text'>Академмістечко</span>
                        </li>
                    </ul>
                </div>
                <div className='getInTouch-email'>
                    <h2 className='getInTouch-email__header'>
                        <span className='getInTouch-email__header_img'> </span>
                        Address
                    </h2>
                    <p className='getInTouch-email__text'>bamg@ukr.net</p>
                </div>
            </div>
        </div>
    }
}
Contact.propTypes	= {
    //getCoordination: PropTypes.function.isRequired
};




