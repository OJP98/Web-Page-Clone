import React from 'react';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        const contentClass = `navContent ${  this.props.navbarContent}`;
        const logoClass = `navLogo ${  this.props.navbarLogo}`;

        return (
            <nav className={this.props.navbarStyle}>
                <div className={contentClass}>
                    <div className={logoClass} />
                    <div className="navTopMenu">
                        <a>Home</a>
                        <a>Download</a>
                    </div>
                    <a>English</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;