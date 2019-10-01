import React from 'react';
import Button from './Button.js'

class InitialScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div className="firstScreen">
                <img alt="" className="firstScreenImg" style={{ opacity: this.props.opacity }}/>
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
                        <i className="firstScreenMore" />
                        <i className="firstScreenMore" />
                        <i className="firstScreenMore" />
                    </div>
                </div>
            </div>
        );
    }
}

export default InitialScreen;