import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
import	{	bindActionCreators	}	from	'redux'

//Actions:
import * as mapActions from '../actions/mapActions'
//Components:
import Contact   from '../components/contact/Contact'
import Map from '../components/map/Map'

class	Contacts	extends	Component	{
    render()
    {
        //Actions:
        const {getCoordination} = this.props.mapActions;
        //Data:
        const {map} = this.props;

        return	<section className='contact'>
            <Contact getCoordination={getCoordination} />
            <Map  center={map.center} zoom={map.zoom}
                 zhytomyrska={map.zhytomyrska} druzhbyNarodiv={map.druzhbyNarodiv}
                 akademmistechko={map.akademmistechko}/>
        </section>
    }
}

function	mapStateToProps(state)	{
    return	{
        map: state.map
    }
}

function	mapDispatchToProps(dispatch)	{
    return	{
        mapActions: bindActionCreators(mapActions,	dispatch)
    }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(Contacts)