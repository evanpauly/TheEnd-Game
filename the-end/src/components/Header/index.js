import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="">
        <div>
          <Link className="" to="/">
            <h1 className="">Start Over</h1>
          </Link>
        </div>
    </header>
  );
};

export default Header;