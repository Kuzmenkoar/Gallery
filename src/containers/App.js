import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
import	*	as	galleryActions	from	'../actions/galleryActions'
import	{	bindActionCreators	}	from	'redux'

//Components:
import	Header	from	'../components/header/Header'
import	Nav	from '../components/nav/Nav'
import  Gallery from '../components/gallery/Gallery'
import  Footer from '../components/footer/Footer'



class	App	extends	Component	{
    render()
    {
        const {getDataGal} = this.props.galleryActions;
        const {gallery} = this.props;


        return	<div>
            <Header/>
            <Nav/>
            <Gallery getDataGal={getDataGal} dataList={gallery.list}/>
            <Footer/>
        </div>
    }
}

function	mapStateToProps(state)	{
   return	{
       gallery: state.gallery
    }
}

function	mapDispatchToProps(dispatch)	{
    return	{
        galleryActions: bindActionCreators(galleryActions,	dispatch)
    }
}

export	default	connect(mapStateToProps,	mapDispatchToProps)(App)