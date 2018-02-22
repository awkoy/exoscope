import React, { Component } from 'react'; 
import { Logo, Link, Auth } from '../components';

class Header extends Component {

  getHeaderLinks = () => {
    const linksData = [
        {type: 'header__navigation__link', content: 'Episodes', href: '/episodes'},
        {type: 'header__navigation__link', content: 'Coins', href: '/coins'},
        {type: 'header__navigation__link', content: 'Holdings', href: '/holdings'},
        {type: 'header__navigation__link', content: 'Events', href: '/events'},
        {type: 'header__navigation__link', content: 'Pairs', href: '/pairs'},
        {type: 'header__navigation__link soon', content: 'Pulse', href: '/pulse'}
    ]; 
    return linksData.map((el, i) => <Link key={`hl${i}`} type={el.type} href={el.href} content={el.content}/>);
  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <Logo/>
          <nav className="header__navigation">
            {this.getHeaderLinks()}
          </nav>
          <Auth/>
        </div>
      </header>    
    );
  }
}

export default Header;
