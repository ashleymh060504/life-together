import { useState } from 'react';

function EditChores({ chore }) {

    const [name, setName] = useState(chore.name);
    const [description, setDescription] = useState(chore.description || '');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    // PUT

    const updateChore = async (e) => {
        e.preventDefault();
        try {
            const body = { name, description };
            console.log(body);
            const response = await fetch(`http://localhost:3001/api/cleaning-chores/${chore.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                window.location = '/together';
            }
            else {
                console.error('Failed to update chore:', response.status, await response.text());
            }


        } 
        catch (err) {
            console.error(err.message);
        }
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${chore.id}`}>
                UPDATE
            </button>

            <div className="modal fade" id={`id${chore.id}`} tabIndex="-1" aria-labelledby={`updateModalLabel${chore.id}`} aria-hidden="true" onClick={() => {
                setName(chore.name);
                setDescription(chore.description);
            }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`updateModalLabel${chore.id}`}>Update your Chore</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                setName(chore.name);
                                setDescription(chore.description);
                            }}></button>
                        </div>
                        <div className="modal-body">
                            <form id='editChoreForm' className='d-flex flex-wrap needs-validation'>
                                <input type="text" className='form-control' value={name} onChange={handleNameChange} placeholder='Chore Name' required/>
                                <textarea className='form-control mt-3' value={description || ''} onChange={handleDescriptionChange} placeholder='Chore Description'></textarea>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                setName(chore.name);
                                setDescription(chore.description);
                            }}>
                                Close
                            </button>
                            <button type="button" form='editChoreForm' className="btn btn-primary" onClick={e => updateChore(e)}>Edit changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditChores;