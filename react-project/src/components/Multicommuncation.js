import React from 'react';

class Multicommunication extends React.Component {

    render()
    {
        const iphoneImg = require('..\\..\\resources\\images\\mobile1iphone.jpg');
        const img1 = require('..\\..\\resources\\images\\img1.png');
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
                <img alt="" className="secondScreenIphone" src={iphoneImg}/>
                {/* <span className="flyImgSpanL1">
                    <img alt="" src={layer1} className="flyImg" />
                </span> */}
                {/* <FloatingImage src={img1} /> */}
            </div>
        );
    }
}

export default Multicommunication;