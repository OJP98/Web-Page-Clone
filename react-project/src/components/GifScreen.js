import React from 'react';

class GifScreen extends React.Component {
    render() {

        const pstyle = {color: '#fff'};

        return (
            <div className="fourthScreen">
                <div className="fourthScreenContent">
                    <h3 className="subtitle">Your global Messenger</h3>
                    <p className="paragraph" style={pstyle}>
                    The most popular personal communications app in history: <br/>
                    over 1,000,000,000 registered users across 80+ countries.</p>
                </div>
            </div>
        );

    }
}

export default GifScreen;