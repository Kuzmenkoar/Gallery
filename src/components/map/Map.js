import React, { Component }	from 'react'
import GoogleMap            from 'google-map-react'
import  './map.scss'

export	default	class	Map	extends	Component	{

    render() {
        const map = this.props;

        return (
            <div className='map'>
                <GoogleMap
                center={map.center} defaultZoom={map.zoom}>
                    <div {...map.zhytomyrska} className='map__item'>A</div>
                    <div {...map.druzhbyNarodiv} className='map__item'>B</div>
                    <div {...map.akademmistechko} className='map__item'>C</div>
                </GoogleMap>
            </div>);
    }
}





