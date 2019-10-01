import React from 'react';

class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'japanese',
            isClicked: false,
        }
    }

    render() {

        let className = '';
        const { current } = this.props;

        if (current === 'japanese')
            className = "japaneseLang";
        else
            className = "englishLang"

        return (
            <div>
                <i className={`chatBubble ${className}`} />
                <i className="chatArrow"/>
            </div>
        )
    }
}

export default ChatBubble;