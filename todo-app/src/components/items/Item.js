import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import globalContext from '../../context/global/globalContext';

const Item = ({id, item}) => {
    const {addedAt, description, deadline, notes} = item;
    const {clearTask} = useContext(globalContext);    

    // Clear the Item
    const clear = e => {
        e.preventDefault();
        clearTask(id);
    }

    // Expand and Show item details
    const expand = e => {
        e.preventDefault();
        e.target.classList.toggle('rotate'); // Rotate Button
        const id = e.target.attributes.data.value.split(':')[1]; // Get ID from button
        const itemBox = document.getElementById(`item-box:${id}`); // Use ID and find item-box
        itemBox.querySelector('.details').classList.toggle('show'); // Find .details box in it and toggle .show
    }

    // Get suitable length for description according to screen size
    const getDescriptionLength = () => window.innerWidth < 430 ? 10 : 20;

    // Date format 
    const dateFormat = date => {
        let [year, month, day] = date.split('-');
        day = parseInt(day);
        const prefix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${day}${prefix} ${months[parseInt(month)-1]}, ${year.slice(2)}`
    }

    return (
        <div className="item-box" id={`item-box:${id}`}>
            <div className="item">
                <p>
                    {
                        description.length >= getDescriptionLength() ? `${description.slice(0, getDescriptionLength())}...` : description
                    }
                </p>
                <small>{dateFormat(deadline)}</small>
                <div className="buttons">
                    <button className="expand" data={`expand:${id}`} onClick={expand}>
                        <i className="fas fa-chevron-down"  data={`expand:${id}`}></i>
                    </button>
                    <button className="clear" onClick={clear}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="details">
                <small>Details of the task</small>
                <div className="detail-control">
                    <span>Added At</span>
                    <span>{dateFormat(addedAt)}</span>
                </div>
                <div className="detail-control">
                    <span>Full Description</span>
                    <span>{description}</span>
                </div>
                <div className="detail-control">
                    <span>Deadline</span>
                    <span>{dateFormat(deadline)}</span>
                </div>
                {
                    notes.trim() !== '' &&
                    <div className="detail-control">
                        <span>Additional Notes</span>
                        <span>{notes}</span>
                    </div>
                }
            </div>
        </div>
    )
}

Item.prototype = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
}

export default Item;