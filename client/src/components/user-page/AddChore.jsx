import { useEffect, useState } from 'react';
import './chores.css';

function AddChore() {

    // Dates
    const date = new Date();
    const options = {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }; 

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const [month, day, year] = formattedDate.split('/');
    const formattedDeadline = `${year}-${month}-${day}`;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(formattedDeadline);
    const [defaultChores, setDefaultChores] = useState([]);

    // Adding a Chore
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, description, deadline };
            const response = await fetch('http://localhost:3001/api/chores/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                window.location = '/user';
                console.log(await response.json());
            }
            else {
                console.error('Failed to add chore:', response.status, await response.text());
            }
        } 
        catch (err) {
            console.error(err.message);
        }
    }

    // Handle value change
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    // Default Chores

    const handleChoreSelect = (e) => {
        const selectedIndex = e.target.value;
        if (selectedIndex !== 'default') {
            const selectedChore = defaultChores[selectedIndex];
            setName(selectedChore.name);
            setDescription(selectedChore.description || '');
            setDeadline(formattedDeadline);
        } else {
            setName('');
            setDescription('');
            setDeadline(formattedDeadline);
        }
    };


    const getDefaultChores = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/cleaning-chores');

            const data = await response.json();
            setDefaultChores(data);
        } 
        catch (err) {
            console.error('Error fetching chores:', err.message);
            setError('An error occured while fetching chores.');
        }
    };

    useEffect(() => {
        getDefaultChores();
    }, []);

    return(
        <>
            <div className="container text-left mt-5">
                {/* Add Chore */}
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addChoreModal">
                            Add Chore
                        </button>

                        <div className="modal fade" id="addChoreModal" tabIndex="-1" aria-labelledby="addChoreModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="addChoreModalLabel">Add a Chore</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Form */}
                                        <form id='addChoreForm' className='d-flex flex-wrap needs-validation' onSubmit={onSubmitForm}>
                                            <select class="form-select" aria-label="Default select example" onChange={handleChoreSelect}>
                                                <option selected>Need some choices?</option>
                                                {defaultChores.map((chore, index) => (
                                                    <option value={index}>{chore.name}</option>
                                                ))}
                                            </select>
                                            <input type="text" className='form-control mt-3' value={name} onChange={handleNameChange} placeholder='Chore Name' required/>
                                            <textarea id='addDeadlineValue' className='form-control mt-3' value={description} onChange={handleDescriptionChange} placeholder='Chore Description'></textarea>
                                            <label className='form-control mt-3' for="addDeadlineValue">
                                                Chore Deadline
                                                <input id='addDeadlineValue' type="date" className='form-control' value={deadline} min={deadline} onChange={handleDeadlineChange}/>
                                            </label>
                                        </form>
                                        {/*  */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type='submit' form='addChoreForm' className="btn btn-primary">Add Chore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddChore;