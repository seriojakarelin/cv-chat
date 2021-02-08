import React from 'react';
import avatar from '../../images/avatar.jpg';

function Header() {
    return (
        <header className="header">
            <img className="header__avatar" src={avatar} alt="Здесь должно было быть моё фото, однако, что-то пошло не по плану"></img>
            <h1 className="header__name">Серёжа Карелин</h1>
        </header>
    );
  }
  
  export default Header;