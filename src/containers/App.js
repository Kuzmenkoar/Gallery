import React,	{	Component	}	from	'react'
import {	connect	}	from	'react-redux'
import	{	bindActionCreators	}	from	'redux'

//actions:
import * as menuActions from '../actions/menuActions'

//Containers:
import Shop         from './Shop'
import Contact      from './Contact'

//Components:
import Nav	        from '../components/nav/Nav'
import Header	    from '../components/header/Header'
import Footer       from '../components/footer/Footer'

class	App	extends	Component	{
    render() {
        //actions:
        const {getShop, getContact} = this.props.menuActions;
        //data:
        const {container} = this.props.menu;

        const putContainer = (container) =>{
            switch(container){
                case 'Shop' : return <Shop/>;
                case 'Contact' : return <Contact/>;
                default: return <Shop/>
        }};
        return <div>
            <Header/>
            <Nav getShop={getShop} getContact={getContact} />
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