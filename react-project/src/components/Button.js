import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { position } = this.props;

        return (
            <div className={position}>
                <div className="button">
                    <a>
                        Download
                    </a>
                </div>
            </div>
        );
    }
}

export default Button;