import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
import	{	bindActionCreators	}	from	'redux'

//Actions:
import * as mapActions from '../actions/mapActions'
//Components:
import Contact   from '../components/contact/Contact'
import Map from '../components/map/Map'

class	Shop	extends	Component	{
    render()
    {
        //Actions:
        const {getZhytomyrska, getDruzhbyNarodiv, getAkademmistechko} = this.props.mapActions;
        //Data:
        const {map} = this.props;

        return	<div>
            <Contact getZhytomyrska={getZhytomyrska} getDruzhbyNarodiv={getDruzhbyNarodiv}
                     getAkademmistechko={getAkademmistechko}/>
            <Map  center={map.center} zoom={map.zoom}
                 zhytomyrska={map.zhytomyrska} druzhbyNarodiv={map.druzhbyNarodiv}
                 akademmistechko={map.akademmistechko}/>
        </div>
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

export	default	connect(mapStateToProps,	mapDispatchToProps)(Shop)