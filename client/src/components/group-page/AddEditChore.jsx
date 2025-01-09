import { useState } from 'react';

function AddEditChore() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name };
            const response = await fetch('http://localhost:3001/api/cleaning-chores/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = '/together';
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
            <div class="container text-left mt-5">
                {/* Add Chore */}
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addChoreModal">
                            Add Chore
                        </button>

                        <div class="modal fade" id="addChoreModal" tabindex="-1" aria-labelledby="addChoreModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="addChoreModalLabel">Choose your Chores</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        {/* Form */}
                                        <form className='d-flex flex-wrap needs-validation' onSubmit={onSubmitForm}>
                                            <input type="text" className='form-control' id='floatingInputAdd' value={name} onChange={handleNameChange} placeholder='Chore Name' required/>
                                            <button className='btn btn-success'>Add</button>

                                            <input type="text" className='form-control mt-3' value={description} onChange={handleDescriptionChange} placeholder='Chore Description'/>
                                            <button className='btn btn-success mt-3'>Add</button>
                                        </form>
                                        {/*  */}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Chore */}
                <div class="row mt-4">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editChoreModal">
                            Edit Chore
                        </button>

                        <div class="modal fade" id="editChoreModal" tabindex="-1" aria-labelledby="editChoreModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="editChoreModalLabel">{`<GROUP NAME>`}<br/>{`Progress Report`}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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

export default AddEditChore;