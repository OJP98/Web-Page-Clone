import React from 'react';

class AnimatedIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let marginValue = 0;
        this.props.animation !== "play" ? marginValue = -68 : marginValue = 55;

        const style = {
            backgroundPosition: `${this.props.position}`,
            margin: `0 ${marginValue}px`
        };

        return (
            <i className = "icon" style = {style} />
        );
    }
}

export default AnimatedIcon;