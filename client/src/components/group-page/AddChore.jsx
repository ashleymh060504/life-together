import { useState } from 'react';

function AddChore() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, description };
            const response = await fetch('http://localhost:3001/api/cleaning-chores/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                window.location = '/together';
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

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

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
                                            <input type="text" className='form-control' id='floatingInputAdd' value={name} onChange={handleNameChange} placeholder='Chore Name' required/>
                                            <textarea className='form-control mt-3' value={description} onChange={handleDescriptionChange} placeholder='Chore Description'></textarea>
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