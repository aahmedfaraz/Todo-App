import React, {useContext} from 'react';
import Item from './Item';

import globalContext from '../../context/global/globalContext';

const Items = () => {
    const {items} = useContext(globalContext);
    
    return (
        <main>
            <h2>All Tasks</h2>
            <div className="top">
                <small>Description</small>
                <small>Deadline</small>
            </div>
            {
                items.length === 0 &&
                <p>No tasks todo ;)</p>
            }
            {
                items.length !== 0 &&
                items.map((item, index) => <Item key={index} item={item} id={index}/>)
            }
        </main>
    )
}

export default Items;