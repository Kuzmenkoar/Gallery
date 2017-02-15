import React, { PropTypes, Component} from 'react'
import './gallery.scss'

export	default	class	Gallery	extends	Component	{
    getBase(){
        this.props.getDataGal()
    }
    onFocusBlock(index){
        console.log(this[index]);
    }

    render(){
        const { dataList, pagination} =	this.props;
        const array = dataList.slice((pagination - 1) * 12, pagination * 12);

        return <section className='shop' >
            {array.map((data , index) => {
                return <div className='shop-element' key={index}>
                    <figure className='shop-element-figure'>
                        <img className='shop-element-figure__img' src={require('./image1.png')} alt='error'/>
                    </figure>
                    <div className='shop-element-popPap'>
                        <p className='shop-element-popPap__p'>Детальніше</p>
                    </div>
                    <figcaption className='shop-element-figcaption'>
                        <p className='shop-element-figcaption__name'>{data.name}</p>
                        <p className='shop-element-figcaption__price'>{data.price} грн</p>
                    </figcaption>
                </div>
            })}
        </section>

    }
}
Gallery.propTypes	= {
    dataList: PropTypes.array.isRequired
};





