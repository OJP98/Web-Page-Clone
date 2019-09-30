import React from 'react';
// import styled from 'styled-components';
import '../styles/style.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={this.props.position}>
                <div className="button">
                    <a>
                        Download
                    </a>
                </div>
            </div>
        )
    }
}

class AnimatedIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const style = {
            backgroundPosition: `${this.props.position}`,
        }

        return (
            <i className="icon" style={style} />
        )
    }
}

class Navbar extends React.Component{
    constructor(props) {
        super(props)
    }

    render()
    {
        const contentClass = "navContent " + this.props.navbarContent;
        const logoClass = "navLogo " + this.props.navbarLogo;

        return (
            <nav className={this.props.navbarStyle}>
                <div className={contentClass}>
                    <div className={logoClass} />
                    <div className="navTopMenu">
                        <a>Home</a>
                        <a>Download</a>
                    </div>
                    <a>English</a>
                </div>
            </nav>
        )
    }
}

class InitialScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    render()
    {
        return (
            <div className="firstScreen">
                <img className="firstScreenImg" style={{ opacity: this.props.opacity }}/>
                <div className="firstScreenContent" style={{ opacity: this.props.opacity }}>
                    <div className="firstScreenBanner">
                        <h2 className="title">
                            GET ON QQ
                            <br />
                            GET ON THE WORLD
                        </h2>
                        <h4>
                            Overcome language barriers with a better message
                        </h4>
                        <Button position="buttonEnd" />
                    </div>

                    <div className="firstScreenScroll">
                        <p>Scroll Down</p>
                        <i className="firstScreenMore"></i>
                        <i className="firstScreenMore"></i>
                        <i className="firstScreenMore"></i>
                    </div>
                </div>
            </div>
        )
    }
}


class Multicommunication extends React.Component {

    render()
    {
        const iphoneImg = require('..\\..\\resources\\images\\mobile1iphone.jpg');
        const layer1 = require('..\\..\\resources\\images\\mobile1layer1.png');
        return(
            <div className="secondScreen">
                <h3 className="subtitle">
                    <span>Multi</span>
                    <span>communication</span>
                </h3>
                <p className="paragraph">
                    Video calls, voice messages, texting with heaps of fun emoticons. <br />
                    QQ makes sharing moments and memories much easier... <br />
                    The fun is always on with 100+ million online users at any time.
                </p>
                <img className="secondScreenIphone" src={iphoneImg}/>
                <span className="flyImgSpanL1">
                    <img src={layer1} className="flyImg" />
                </span>
            </div>
        )
    }
}


class LiveTranslation extends React.Component {
    render() {
        const iphoneImg = require('..\\..\\resources\\images\\mobile2iphoneen.png');
        const languages = require('..\\..\\resources\\images\\mobile2support1033.png');
        return (
            <div className="thirdScreen">
                <img src={iphoneImg} className="thirdScreenIphone"/>
                <div className="thirdScreenContent">
                    <h3 className="subtitle">
                        <span>Live</span>
                        <span> translation</span>
                    </h3>
                    <p className="paragraph">
                        QQ comes with a built-in translator for all your chats. <br />
                        The automatic translation will sort your problems out <br />
                        when you need to overcome cultural distances.
                    </p>
                    <br />
                    <br />
                    <img src={languages}/>
                </div>
            </div>
        )
    }
}


class Video extends React.Component {
    render() {

        const video = require('..\\..\\resources\\videos\\video.mp4');
        const pstyle = {color: '#fff'}

        return (
            <div className="fourthScreen">
                <div className="fourthScreenContent">
                    <h3 className="subtitle">Your global Messenger</h3>
                    <p className="paragraph" style={pstyle}>
                    The most popular personal communications app in history: <br/>
                    over 1,000,000,000 registered users across 80+ countries.</p>
                    <video src={video} type="video/mp4" autoPlay controls />
                </div>
            </div>
        )

    }
}


class FindFriends extends React.Component {
    render() {

        return (
            <div className="fifthScreen">
                <h3 className="subtitle">
                    <span>Find friends</span>
                    <span> online</span>
                </h3>
                <p className="paragraph">
                    Find and add friends from your phone contacts or link third party accounts. <br />
                    Use the location-based discovery functions to find QQ users in your surroundings and make new friends.
                </p>
                <div className="iconsDiv">
                    <AnimatedIcon position="0 0"/>
                    <AnimatedIcon position="0 -140px"/>
                    <AnimatedIcon position="0 -280px"/>
                </div>
            </div>
        )
    }
}


class Share extends React.Component {

    render() {

        const textStyle = { color: '#fff' }
        const iphoneImg = require('..\\..\\resources\\images\\mobile5iphone.png');
        const iphoneContent = require('..\\..\\resources\\images\\mobile5iphonecontent.jpg');
        const iphoneTopBar = require('..\\..\\resources\\images\\mobile5iphonetopbar.png');
        return (
            <div className="sixthScreen">
                <div className="sixthScreenContent">
                    <h3 className="subtitle" style={textStyle}>
                        Share what matters
                    </h3>
                    <p className="paragraph" style={textStyle}>
                        Don't keep your best moments for yourself: sharing is caring, <br />
                        and Qzone makes it easier to share multimedia content with people you care about.
                    </p>
                </div>

                <img className="sixthScreenIphone" src={iphoneImg} />
                <div className="scrollingIphone">
                    <img src={iphoneTopBar} />
                    <img src={iphoneContent} />
                </div>
            </div>
        )
    }
}

class GoTo extends React.Component {
    render() {
        const image = require('..\\..\\resources\\images\\mobile6front.png');
        return (
            <div className="finalScreen">
                <h3 className="subtitle">
                    <span>Everywhere</span>
                    <span> you go</span>
                </h3>
                <p className="paragraph">
                    QQ is available for Android, iOS/iPhone, Win, Mac, Web... and offers multi-device login <br />
                    and cross-platform integration.
                </p>
                <img className="mobile6img" src={image} />
            </div>
        );
    }
}


class TryNow extends React.Component {
    render() {
        return (
            <div className="tryNow">
                <h3 className="subtitle">Get on QQ, try it now</h3>
                <br />
                <br />
                <br />
                <Button />
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footerContent">
                    <a>FeedBack</a>
                    <a>About Us</a>
                    <a>License</a>
                    <a>Privacy Policy</a>
                </div>
                <div className="footerShare">
                    <a className="share-icons share-icons-fb"/>
                    <a className="share-icons share-icons-tw"/>
                    <a className="share-icons share-icons-wei"/>
                    <a className="share-icons share-icons-wb"/>
                </div>
                <h4 className="copyright">Copyright © 1998 - 2018 Tencent. All Rights Reserved</h4>
            </div>
        )
    }
}


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            navbarStyle: 'navbarPrimary',
            navbarContent: 'navColor1',
            navbarLogo: 'logo1',
            opacity: 1,
        }
    }

    componentDidMount() {
        window.onscroll = () => {

            const opacity = 1 - (window.pageYOffset / 650);

            if (window.pageYOffset > 700){
                this.setState({ navbarStyle: 'navbarSecondary', navbarContent: 'navColor2', navbarLogo: 'logo2' })
            }
            else
            {
                this.setState({ navbarStyle: 'navbarPrimary', navbarContent: 'navColor1', navbarLogo: 'logo1'})
                this.setState({ opacity: opacity });
            }
        }
    }

    render() {
        return(
            <div className="App">
                <Navbar navbarStyle={this.state.navbarStyle} navbarContent={this.state.navbarContent} navbarLogo={this.state.navbarLogo} />
                <InitialScreen opacity={this.state.opacity}/>
                <Multicommunication />
                <LiveTranslation />
                <Video />
                <FindFriends />
                <Share />
                <GoTo />
                <TryNow />
                <Footer />
            </div>
        )
    }
}

export default App;
