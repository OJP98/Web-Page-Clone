import React from 'react';
import Button from './Button'

class GoTo extends React.Component {
    render() {
        const image = require('..\\..\\resources\\images\\mobile6front.png');
        const textStyle1 = { color: '#3D444C' };
        const textStyle2 = { color: '#4688EB' };
        return (
            <div>
                <div className="finalScreen">
                    <h3 className="subtitle">
                        <span style={textStyle2}>Everywhere</span>
                        <span style={textStyle1}> you go</span>
                    </h3>
                    <p className="paragraph">
                        QQ is available for Android, iOS/iPhone, Win, Mac, Web... and offers multi-device login <br />
                        and cross-platform integration.
                    </p>
                    <img alt="" className="mobile6img" src={image} />
                </div>
                <div className="tryNow">
                    <h3 className="subtitle">Get on QQ, try it now</h3>
                    <br />
                    <br />
                    <br />
                    <Button />
                </div>
            </div>
        );
    }
}

export default GoTo;