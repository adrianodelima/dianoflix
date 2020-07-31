import React from 'react';

function ButtonLink(props){

    // props => props.x "é passado na criação"

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;