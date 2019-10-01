import React from 'react';

class LiveTranslation extends React.Component {
    render() {
        const iphoneImg = require('..\\..\\resources\\images\\mobile2iphoneen.png');
        const languages = require('..\\..\\resources\\images\\mobile2support1033.png');
        return (
            <div className="thirdScreen">
                <img alt="" src={iphoneImg} className="thirdScreenIphone"/>
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
                    <img alt="" src={languages}/>
                </div>
            </div>
        );
    }
}

export default LiveTranslation;