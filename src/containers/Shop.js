import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
import	{	bindActionCreators	}	from	'redux'
//Actions:
import	*	as	galleryActions	from	'../actions/galleryActions'
import	*	as	paginAction	    from	'../actions/paginAction'
import  *   as  menuActions     from '../actions/menuActions'

//Components:
import Gallery      from '../components/gallery/Gallery'
import Pagination   from '../components/pagination/Pagination'

class	Shop	extends	Component	{
    render()
    {
        //Functions:
        const {getDetails} = this.props.galleryActions;
        const {getPagination} = this.props.paginAction;
        const {getContainer} = this.props.menuActions;
        //Data:
        const {gallery} = this.props;
        const {pagination} = this.props;

        const runPagination= <Pagination dataList={gallery.list} pagination={pagination.pagination}
                                         getPagination={getPagination}/>

        return	<section className='shop'>
            {runPagination}
            <Gallery getDetails={getDetails} dataList={gallery.list} pagination={pagination.pagination}
                     getContainer={getContainer}/>
            {runPagination}
        </section>
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
        paginAction: bindActionCreators(paginAction, dispatch),
        menuActions: bindActionCreators(menuActions,dispatch)
    }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(Shop)