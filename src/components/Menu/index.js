import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return ( 
    <nav className="Menu">
        <a href="/">
        <img class="Logo" src={Logo} alt="DianoFlix logo"/>
        </a>

        <Button className="ButtonLink" href="/">
        Novo vídeo
        </Button>
    </nav>
    );
}

export default Menu;