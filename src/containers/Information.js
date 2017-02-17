import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
//import	{	bindActionCreators	}	from	'redux'

//Actions:
//import * as mapActions from '../actions/mapActions'
//Components:
//import Contact   from '../components/contact/Contact'
import Info from '../components/information/Information'

class	Information	extends	Component	{
    render()
    {
        //Actions:
        //const {getZhytomyrska, getDruzhbyNarodiv, getAkademmistechko} = this.props.mapActions;
        //Data:
        //const {gallery} = this.props;

        return	<section className='info'>
            <Info/>
        </section>
    }
}

function	mapStateToProps()	{
    return	{
        //gallery: state.gallery
    }
}

function	mapDispatchToProps()	{
    return	{
        //mapActions: bindActionCreators(mapActions,	dispatch)
    }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(Information)