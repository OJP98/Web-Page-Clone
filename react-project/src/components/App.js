import React from 'react';
// import styled from 'styled-components';
import '../styles/style.css';

class Navbar extends React.Component{
    render()
    {
        return (
            <nav className="navbar">
                <div className="navContent">
                    <div className="navLogo" />
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
    render()
    {
        return (
            <div className="firstScreen">
                <img />
                <div className="firstScreenBanner">
                    <h2 className="title">
                        GET ON QQ
                        <br />
                        GET ON THE WORLD
                    </h2>
                    <h4>
                        Overcome language barriers with a better message
                    </h4>
                    <Button position="buttonEnd"/>
                </div>

                <div className="firstScreenScroll">
                    <p>Scroll Down</p>
                    <i className="firstScreenMore"></i>
                    <i className="firstScreenMore"></i>
                    <i className="firstScreenMore"></i>
                </div>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render()
    {
        return(
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

const App = () => (
    <div>
        <Navbar />
        <InitialScreen />
        <Multicommunication />
        <LiveTranslation />
    </div>
);

export default App;
