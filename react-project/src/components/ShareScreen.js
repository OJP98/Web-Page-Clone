import React from 'react';

class ShareScreen extends React.Component {

    render() {

        const textStyle = { color: '#fff' };
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
                        Don&apost keep your best moments for yourself: sharing is caring, <br />
                        and Qzone makes it easier to share multimedia content with people you care about.
                    </p>
                </div>

                <img alt="" className="sixthScreenIphone" src={iphoneImg} />
                <div className="scrollingIphone">
                    <img alt="" src={iphoneTopBar} />
                    <img alt="" src={iphoneContent} />
                </div>
            </div>
        );
    }
}

export default ShareScreen;