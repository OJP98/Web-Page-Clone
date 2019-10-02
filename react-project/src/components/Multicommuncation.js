import React from 'react';

class Multicommunication extends React.Component {

    render()
    {
        const iphoneImg = require('..\\..\\resources\\images\\mobile1iphone.jpg');
        const img1 = require('..\\..\\resources\\images\\img1.png');
        const img2 = require('..\\..\\resources\\images\\img2.png');
        const img3 = require('..\\..\\resources\\images\\img3.png');
        const img4 = require('..\\..\\resources\\images\\img4.png');
        const img5 = require('..\\..\\resources\\images\\img5.png');
        const img6 = require('..\\..\\resources\\images\\img6.png');
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
                <img alt="" src={img1} className="flyImg flyImg1" />
                <img alt="" src={img2} className="flyImg flyImg2" />
                <img alt="" src={img3} className="flyImg flyImg3" />
                <img alt="" src={img4} className="flyImg flyImg4" />
                <img alt="" src={img5} className="flyImg flyImg5" />
                <img alt="" src={img6} className="flyImg flyImg6" />
            </div>
        );
    }
}

export default Multicommunication;