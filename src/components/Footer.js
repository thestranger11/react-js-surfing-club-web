import React from 'react';
import MenuContainer from './MenuContainer';
import SocialMedia from './SocialMedia';

const Footer = (props) => {
    return (
        <footer>
            <MenuContainer />
            <SocialMedia facebook={true} twitter={true} linkedin={true} />
        </footer>
    );
}

export default Footer;