import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/menu.css';

export default class Menu extends React.Component {
    _isMounted = false;

    state = {
      isMobile: false,
      showMenu: false
    };

    handleWindowResize = () => {
        if(window.innerWidth <= 450 && this._isMounted){
            this.setState({ isMobile: true })
        }else if(this._isMounted){
            this.setState({ isMobile: false })
        }
    }

    clickHandler = (close) => {
        if(close){
            this.setState({ showMenu: false })
        }else{
            this.setState((prevState, props) => {
                return {
                    showMenu: !prevState.showMenu
                }
            })
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize.bind(this));
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

      return (
        <div className="main-menu container">
            <div className="app-logo">
                <Link to='/' onClick={ (close) => this.clickHandler()}>
                <img src={this.props.logo} alt="site logo" />
                </Link>
            </div>
            { this.state.isMobile && this.props.isToggle && (
                <div className="mobile-menu">
                    <button className={!this.state.showMenu ? 'fas fa-bars' : 'fas fa-times'} onClick={ () => this.clickHandler() }></button>
                    {this.state.showMenu && (
                        <nav onClick={ () => this.clickHandler()}>
                            <Link to='/stories'>Stories</Link>
                            <Link to='/events'>Events</Link>
                            <Link to='/places'>Places</Link>
                            <Link to='/boards'>Boards</Link>
                        </nav>
                    )}
                </div>
            )}
            { (!this.state.isMobile || !this.props.isToggle) && (
                <nav>
                    <Link to='/stories'>Stories</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/places'>Places</Link>
                    <Link to='/boards'>Boards</Link>
                </nav>
            )}
        </div>
      );
    }
}