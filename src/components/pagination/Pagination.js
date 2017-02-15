import	React,	{ Component}	from	'react'
import  './pagination.scss'

export	default	class	Pagination	extends	Component	{
    getNewPagination(val){
        this.props.getPagination(+val.target.innerText)
    }
    getNextPagination(){
        this.props.getNextPaginat(this.props.pagination + 1)
    }
    getPrevPagination(){
        this.props.getPrevPaginat(this.props.pagination - 1)
    }

    render()	{
        const dataLength = Math.ceil(this.props.dataList.length/12);
        const pagination = this.props.pagination;
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




