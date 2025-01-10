import { useState, useEffect } from 'react';

function ToggleComplete({ chore }) {

    const [name, setName] = useState(chore.name);
    const [description, setDescription] = useState(chore.description);
    const [deadline, setDeadline] = useState(chore.deadline);
    const [isComplete, setIsComplete] = useState(chore.isComplete);

    const status = async (e) => {
        e.preventDefault();
        try {
            const newIsComplete = !isComplete;
            setIsComplete(newIsComplete);

            const body = { name, description, deadline, isComplete: newIsComplete };
            const response = await fetch(`http://localhost:3001/api/cleaning-chores/${chore.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok)  {
                console.error('Failed to update chore:', response.status, await response.text());
            }
            else {
                window.location = '/together';
            }
            console.log(await response.json());
        } 
        catch (err) {
            console.error('Failed to update chore:', err.message);
            setIsComplete(isComplete);
        }
    }

    return(
        <>
            <div className="collapse" id={`collapseExample${chore.id}`}>
                <div className="card card-body">
                    {chore.description}
                        <button className={`btn ${isComplete ? 'btn-danger' : 'btn-success'}`} type='button' onClick={e => status(e)}>{isComplete ? 'NOT COMPLETE' : 'COMPLETE'}</button>
                </div>
            </div>
        </>
    );
};

export default ToggleComplete;