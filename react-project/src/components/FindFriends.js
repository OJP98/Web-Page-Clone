import React from 'react';
import AnimatedIcon from './Icon'

class FindFriends extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fifthScreen">
                <h3 className="subtitle">
                    <span>Find friends</span>
                    <span> online</span>
                </h3>
                <p className="paragraph">
                    Find and add friends from your phone contacts or link third party accounts. <br />
                    Use the location-based discovery functions to find QQ users in your surroundings and make new friends.
                </p>
                <div className="iconsDiv">
                    <AnimatedIcon position="0 0" animation={this.props.animation} />
                    <AnimatedIcon position="0 -140px" animation={this.props.animation} />
                    <AnimatedIcon position="0 -280px" animation={this.props.animation} />
                </div>
            </div>
        );
    }
}

export default FindFriends;