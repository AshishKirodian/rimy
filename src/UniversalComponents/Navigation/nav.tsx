import React from 'react';

interface Props {

}

export default function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="/static_images/logo.png" style={{height: 'auto', width: '20%'}} />
            </a>
        </nav>
    );
}