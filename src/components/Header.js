import React from 'react';
import logo from '../images/longboard-logo.jpg';

class Header extends React.Component {
    render() {
        
        return(
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                
                <h2>Radddddddddd!</h2>
            </div>
        );
    }
}

export default Header;