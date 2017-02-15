import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
//import	{	bindActionCreators	}	from	'redux'

//Actions:
//import * as mapActions from '../actions/mapActions'
//Components:
//import Contact   from '../components/contact/Contact'
import Details from '../components/details/Details'

class	Detail	extends	Component	{
    render()
    {
        //Actions:
        //const {getZhytomyrska, getDruzhbyNarodiv, getAkademmistechko} = this.props.mapActions;
        //Data:
        const {gallery} = this.props;

        return	<section className='details'>
            <Details dataList={gallery.list[gallery.id]} />
        </section>
    }
}

function	mapStateToProps(state)	{
    return	{
        gallery: state.gallery
    }
}

function	mapDispatchToProps()	{
    return	{
        //mapActions: bindActionCreators(mapActions,	dispatch)
    }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(Detail)