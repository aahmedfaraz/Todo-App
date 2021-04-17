import React, {Fragment, useContext} from 'react'
import alertContext from '../../context/alert/alertContext';

const Alert = () => {
    const {msg, clearAlert} = useContext(alertContext);

    const alert = document.getElementById('alert');

    // Display Alert
    const displayAlert = () => {
        alert.classList.add('show');
    }

    // Clear Alert
    const clear = e => {
        e.preventDefault();
        alert.classList.remove('show');
        clearAlert();
    }

    // Display alert when msg is available
    msg !== '' && displayAlert();

    return (
        <Fragment>
            <p className={`alert`} id="alert">
                {msg}
                {
                    msg !== '' &&
                    <button onClick={clear}><i className="fas fa-times"></i></button>
                }
            </p>
        </Fragment>
    )
}

export default Alert;