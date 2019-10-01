import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footerContent">
                    <a>FeedBack</a>
                    <a>About Us</a>
                    <a>License</a>
                    <a>Privacy Policy</a>
                </div>
                <div className="footerShare">
                    <a className="share-icons share-icons-fb" />
                    <a className="share-icons share-icons-tw" />
                    <a className="share-icons share-icons-wei" />
                    <a className="share-icons share-icons-wb" />
                </div>
                <h4 className="copyright">Copyright © 1998 - 2018 Tencent. All Rights Reserved</h4>
            </div>
        );
    }
}

export default Footer;
