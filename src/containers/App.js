import React,	{	Component	}	from	'react'
import {	connect	}	from	'react-redux'
import	{	bindActionCreators	}	from	'redux'

//actions:
import * as menuActions from '../actions/menuActions'

//Containers:
import Shop         from './Shop'
import Contacts     from './Contact'
import Detail       from './Details'
import Information  from './Information'

//Components:
import Nav	        from '../components/nav/Nav'
import Header	    from '../components/header/Header'
import Footer       from '../components/footer/Footer'

class	App	extends	Component	{
    render() {
        //actions:
        const {getContainer} = this.props.menuActions;
        //data:
        const {container} = this.props.menu;

        const putContainer = (container) =>{
            switch(container){
                case 'Shop' : return <Shop/>;
                case 'Gallery': return <Shop/>;
                case 'Information': return <Information/>;
                case 'Contact' : return <Contacts/>;
                case 'Details' : return <Detail/>;
                default: return <Shop/>
        }};
        return <div>
            <Header/>
            <Nav getContainer={getContainer} />
            {putContainer(container)}
            <Footer/>
        </div>
    }
}

function	mapStateToProps(state)	{
    return	{
        menu: state.menu
    }
}

function	mapDispatchToProps(dispatch)	{
    return	{
        menuActions: bindActionCreators(menuActions, dispatch)
        }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(App)