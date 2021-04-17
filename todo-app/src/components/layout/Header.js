import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import globalContext from '../../context/global/globalContext';

const Header = () => {
    const {items} = useContext(globalContext);
    return (
        <header>
            <h1>Todo App</h1>
            <div className="totals">
                <p>Total tasks todo</p>
                <small>{items.length}</small>
            </div>
            <ul>
                <Link to="/" style={list}><li>Home</li></Link>
                <Link to="/about" style={list}><li>About</li></Link>
            </ul>
        </header>
    )
}

const list = {
    textDecoration: 'none',
}

export default Header;