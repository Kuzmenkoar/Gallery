import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
import	{	bindActionCreators	}	from	'redux'
//Actions:
import	*	as	galleryActions	from	'../actions/galleryActions'
import	*	as	paginAction	from	'../actions/paginAction'

//Components:
import Gallery      from '../components/gallery/Gallery'
import Pagination   from '../components/pagination/Pagination'

class	Shop	extends	Component	{
    render()
    {
        //Functions:
        const {getDataGal} = this.props.galleryActions;
        const {getPagination, getNextPagination, getPrevPagination} = this.props.paginAction;
        //Data:
        const {gallery} = this.props;
        const {pagination} = this.props;

        const runPagination= <Pagination dataList={gallery.list} pagination={pagination.pagination}
                                         getPagination={getPagination} getNextPaginat={getNextPagination}
                                         getPrevPaginat={getPrevPagination}/>

        return	<div>
            {runPagination}
            <Gallery getDataGal={getDataGal} dataList={gallery.list} pagination={pagination.pagination}/>
            {runPagination}
        </div>
    }
}

function	mapStateToProps(state)	{
    return	{
        gallery: state.gallery,
        pagination: state.pagination
    }
}

function	mapDispatchToProps(dispatch)	{
    return	{
        galleryActions: bindActionCreators(galleryActions,	dispatch),
        paginAction: bindActionCreators(paginAction, dispatch)
    }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(Shop)