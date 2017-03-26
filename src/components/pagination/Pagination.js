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
            <li  className='pagination-li' onClick={pagination > 1 ? ::this.getPrevPagination : null}>
                <a className={(pagination === 1) ? 'pagination-li_offArrow pagination-li__arrow'
                    : 'pagination-li__arrow'} href='#top'>
                    &lt;
                </a>
            </li>

            { arr.map((val, id)=>{
                return <li className='pagination-li' key={id} onClick={id === pagination? null : ::this.getNewPagination }>
                        <a className={(id === pagination) ? 'pagination-li__a pagination-li_active'
                            : 'pagination-li__a'} href='#top'>
                            {id}
                        </a>
                </li>
            })}
            <li className='pagination-li' onClick={pagination < dataLength ? ::this.getNextPagination : null}>
                <a className={(pagination === dataLength) ? 'pagination-li_offArrow pagination-li__arrow'
                    : 'pagination-li__arrow'} href='#top'>
                    &gt;
                </a>
            </li>
        </ul>
    }
}
// Pagination.propTypes	= {
//     dataLength: PropTypes.number.isRequired
//     //pagination: PropTypes.number.isRequired
// };




