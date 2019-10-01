import React from 'react';
import Navbar from './Navbar'
import InitialScreen from './InitialScreen'
import Multicommunication from './Multicommuncation'
import LiveTranslation from './LiveTranslation'
import GifScreen from './GifScreen'
import FindFriends from './FindFriends'
import ShareScreen from './ShareScreen'
import GoTo from './GoTo'
import Footer from './Footer'
import '../styles/style.css';

class FloatingImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="flyImgDiv">
                <img alt="" src={this.props.src} className="flyImg" />
            </div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navbarStyle: 'navbarPrimary',
            navbarContent: 'navColor1',
            navbarLogo: 'logo1',
            opacity: 1,
            animation: 'hold'
        };
    }

    componentDidMount() {
        window.onscroll = () => {

            const opacity = 1 - (window.pageYOffset / 650);

            if (window.pageYOffset < 700){
                this.setState({ navbarStyle: 'navbarPrimary', navbarContent: 'navColor1', navbarLogo: 'logo1', opacity });
            }
            else if (window.pageYOffset >= 3600) {
                this.setState({ animation: 'play' });
            }
            else
            {
                this.setState({ navbarStyle: 'navbarSecondary', navbarContent: 'navColor2', navbarLogo: 'logo2' });
            }
        };
    }

    render() {
        return(
            <div className="App">
                <Navbar navbarStyle={this.state.navbarStyle} navbarContent={this.state.navbarContent} navbarLogo={this.state.navbarLogo} />
                <InitialScreen opacity={this.state.opacity}/>
                <Multicommunication />
                <LiveTranslation />
                <GifScreen />
                <FindFriends animation={this.state.animation}/>
                <ShareScreen />
                <GoTo />
                <Footer />
            </div>
        );
    }
}

export default App;
