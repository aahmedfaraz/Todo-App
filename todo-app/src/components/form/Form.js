import React, {useContext, useState} from 'react'
import globalContext from '../../context/global/globalContext';
import alertContext from '../../context/alert/alertContext';

const Form = () => {
    const {addTask} = useContext(globalContext);
    const {setAlert} = useContext(alertContext);
    
    const [item, setItem] = useState({
        description: '',
        deadline: '',
        notes: ''
    })

    const {description, deadline, notes} = item;

    const onChange = e => setItem({...item, [e.target.name]: e.target.value});

    const add = e => {
        e.preventDefault();
        const date = new Date();
        const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        console.log(dateNow);
        if(description.trim() !== "" && deadline !== "") {
            if(validateDeadline(deadline)){
                addTask(dateNow, description, deadline, notes);
                setItem({
                    description:'',
                    deadline:'',
                    notes: ''
                })
            } else {
                setAlert("Invalid deadline selected");
            }
        } else {
            setAlert("Some credentials are missing");
        }
    }

    const validateDeadline = (deadline) => {
        const date = new Date();
        const dateNow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const [yearT, monthT, dateT] = dateNow.split('-');
        const [yearD, monthD, dateD] = deadline.split('-');

        console.log(dateNow + ":" + deadline );

        // Check Years
        if(parseInt(yearT) < parseInt(yearD)) return true;
        else {
            if (parseInt(yearT) === parseInt(yearD)) {
                // Check Months
                if(parseInt(monthT) < parseInt(monthD)) return true;
                else {
                    if (parseInt(monthT) === parseInt(monthD)) {
                        // Check Dates
                        if(parseInt(dateT) < parseInt(dateD)) return true;
                        else {
                            if (parseInt(dateT) === parseInt(dateD)) return true;
                            else return false;
                        }
                    } else return false;
                }
            } else return false;
        }
    }

    return (
        <form>
            <h4>Add Task</h4>
            <input type="text" name="description" id="description" value={description} onChange={onChange} placeholder="Enter Description"/>
            <div className="form-control">
                <label htmlFor="deadline">Select Deadline</label>
                <input type="date" name="deadline" id="deadline" value={deadline} onChange={onChange} placeholder="Enter Deadline"/>
            </div>
            <input type="text" name="notes" id="notes" value={notes} onChange={onChange} placeholder="Enter Additional Notes (Optional)"/>
            <input type="submit" value="Add" onClick={add}/>
        </form>
    )
}

export default Form;