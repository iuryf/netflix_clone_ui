import React from 'react';
import './Header.css';

export default () => {
    return (
          <header>
              <div className="header--logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg?uselang=pt" alt="Netflix" />
              </div>
              <div className="header--user">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?uselang=pt" alt="Usuário"/>
              </div>
              <div>

              </div>
          </header>    
    );
}