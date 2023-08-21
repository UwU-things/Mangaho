import { useState, useEffect } from 'react';
import LayoutDetails from '../styles/components/Layout/LayoutDatails';
import { Header } from '../styles/components/Layout/Headers';

interface Props{
    children: JSX.Element | JSX.Element[] | string
}

const Layout = ({children}: Props) => {
    return(
        <LayoutDetails>
            <Header>
                <nav>
                    <div className="logo">
                        MangáHō
                    </div>
                    <div className="navigation">
                        <a href="#">Inicio</a>
                    </div>
                </nav>
            </Header>
            <div className="children">
                {children}
            </div>
        </LayoutDetails>
    )
}


export default Layout;