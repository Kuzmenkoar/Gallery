import	React,	{ Component}	from	'react'
import  './pagination.scss'

export	default	class	Pagination	extends	Component	{
    getNewPagination(val){
        this.props.getPagination(+val.target.innerText);
        this.props.getData((+val.target.innerText-1) * this.props.viewElem, this.props.viewElem);
    }
    getNextPagination(){
        this.props.getPagination(this.props.pagination + 1);
        this.props.getData((this.props.pagination) * this.props.viewElem, this.props.viewElem);
    }
    getPrevPagination(){
        this.props.getPagination(this.props.pagination - 1);
        this.props.getData((this.props.pagination-2) * this.props.viewElem, this.props.viewElem);
    }

    render()	{
        const pagination = this.props.pagination;
        const viewElem = this.props.viewElem;
        let dataLength = this.props.dataLength;

        if (dataLength==false) this.props.getLength();
        dataLength = Math.ceil(dataLength/viewElem);

        let arr = [], i;
        for(i = 1; i<= dataLength; i++) {
            arr[i] = '';
        }

        return <ul className='pagination'>
            <li className={(pagination === 1) ? 'pagination_offArrow pagination__li__arrow'
                : 'pagination__li__arrow'} onClick={pagination > 1 ? ::this.getPrevPagination : null}>
                <img src={require('./arrowLeft.png')}  alt='&larr;'/>
            </li>

            { arr.map((val, id)=>{
                return <li className={(id === pagination) ? 'pagination__li pagination_active'
                    : 'pagination__li'} key={id} onClick={id === pagination? null : ::this.getNewPagination }>{id}</li>
            })}
            <li className={(pagination === dataLength) ? 'pagination_offArrow pagination__li__arrow'
                : 'pagination__li__arrow'} onClick={pagination < dataLength ? ::this.getNextPagination : null}>
                <img src={require('./arrowRight.png')}  alt='&rarr;'/>
            </li>
        </ul>
    }
}
// Pagination.propTypes	= {
//     dataLength: PropTypes.number.isRequired
//     //pagination: PropTypes.number.isRequired
// };




