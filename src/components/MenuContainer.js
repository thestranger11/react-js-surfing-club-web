import React from 'react';
import Menu from './Menu';
import '../assets/css/menu.css';
import logo from '../assets/img/logo.png';

const MenuContainer = (props) => {
    return (
        <>
            {(() => {
                switch (props.element) {
                    case "header":   return (
                        <header>
                            <Menu logo={logo} isToggle={true} />
                        </header>
                    )
                    case "footer": return (
                        <footer>
                            <Menu logo={logo} />
                        </footer>
                    )
                    default:      return (
                        <div>
                            <Menu logo={logo} />
                        </div>
                    )
                }
            })()}
                
        </>
    );
}

export default MenuContainer;