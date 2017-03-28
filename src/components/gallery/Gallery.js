import React, {  Component} from 'react'
import './gallery.scss'

export	default	class	Gallery	extends	Component	{
    getDetailOfItem(item){
        this.props.getDetails(item);
        this.props.getContainer('Details');
    }

    render(){
        const { dataList} =	this.props;
        const viewElem = this.props.viewElem;

        if (dataList==false) this.props.getData(0,viewElem);
        //const array = dataList.slice((pagination - 1) * 12, pagination * 12);

        return <div className='gallery-elements'>
            <h1 className='gallery-elements__header'>Картинна галерея</h1>
                {dataList.map((data, index) => {
                    let bountItemClick = this.getDetailOfItem.bind(this, index);

                    return <div className='element' key={index}>
                        <figure className='element-figure'>
                            <img className='element-figure__img' src={require('../../../img/' + data.img)} alt='error'/>
                        </figure>
                        <figcaption className='element-figcaption'>
                            <h1 className='element-figcaption__name'>{data.name}</h1>
                            <p className='element-figcaption__price'><span className='element-figcaption__span'>Ціна:  </span>{data.price} грн</p>
                            <p className='element-figcaption__dimensions'><span className='element-figcaption__span'>Розмір:  </span>{data.dimensions} </p>
                            <button className='element-figcaption__button' onClick={bountItemClick}>Детальніше</button>
                        </figcaption>
                    </div>
                })}
            </div>
    }
}
//Gallery.propTypes	= {
    //dataList: PropTypes.array.isRequired
//};





