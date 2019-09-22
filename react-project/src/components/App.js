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

const App = () => (
    <div>
        <Navbar />
        <InitialScreen />
    </div>
);

export default App;