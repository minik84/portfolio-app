import React, { useState } from 'react';

import photo1 from '../../assets/images/photo1.png';

const Header = () => {

  return (
    <div className="header">
      <div className="header__welcome"><p>Witaj!</p></div>
      <div className="header__description">
        <p className="header__name">Jestem Dominik ostrowski</p>
        <p className="header__profession">Web Developer - freelancer</p>
      </div>
      <button className="button header__button">Zobacz moje portfolio</button>
      <img src={photo1} className="header__image"></img>
    </div>
  )
}

export default Header;