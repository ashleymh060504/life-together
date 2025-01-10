import { useState, useEffect } from 'react';
import EditChores from '../EditChores.jsx';
import ToggleComplete from './ToggleComplete.jsx';
import './chores.css';

function Chores() {

    const [chores, setChores] = useState([]);
    const [completedChores, setCompletedChores] = useState([]);
    const [error, setError] = useState(null);

    // GET

    const getChores = async () => {
        try {
            // const token = localStorage.getItem('token');
            // if (!token) {
            //     setError('No token found. Please log in');
            //     return;
            // }

            // const response = await fetch('http://localhost:3001/api/cleaning-chores', {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // });

            const response = await fetch('http://localhost:3001/api/cleaning-chores');

            // if (!response.ok) {
            //     if (response.status === 401) {
            //         setError('Unauthorized. Please log in again.');
            //     }
            //     else if (response.status === 403) {
            //         setError('Forbidden. Invalid token.');
            //     }
            //     return;
            // }

            const data = await response.json();
            setChores(data.filter((chore) => !chore.isComplete));
        } 
        catch (err) {
            console.error('Error fetching chores:', err.message);
            setError('An error occured while fetching chores.');
        }
    };

    const getCompletedChores = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/cleaning-chores/completed');
            const data = await response.json();
            setCompletedChores(data);
        } 
        catch (err) {
            console.error('Error fetching chores:', err.message);
            setError('An error occured while fetching chores.');
        }
    }

    useEffect(() => {
        getChores();
        getCompletedChores();
    }, []);

    // DELETE

    const deleteChore = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/cleaning-chores/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setChores(chores.filter(chore => chore.id !== id));
                window.location = '/together'
            }
            else {
                console.error('Failed to delete chore:', response.status, await response.text());
            }
        } 
        catch (err) {
            console.error(err.message);
        }
    }

    // Error

    if (error) {
        return <div className='text-center mt-5'>{error}</div>;
    }

    return(
        <>
            <div className='text-center mt-5'>TO-DO</div>
            <div className="container text-center mt-2 border-test">
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">CHORE</th>
                            <th scope="col">USER</th>
                            <th scope="col">DELETE</th>
                            <th scope="col">UPDATE</th>
                            <th scope="col">DEADLINE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chores
                            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                            .map((chore, index) => (
                            <tr key={chore.id}>
                                <th scope='row'>{index + 1}</th>
                                {/* Chore */}
                                <td>
                                    <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${chore.id}`} aria-expanded="false" aria-controls="collapseExample">
                                        {chore.name}
                                    </button>
                                    <ToggleComplete chore={chore}/>
                                </td>
                                {/* User */}
                                <td>{'<USER>'}</td>
                                {/* Delete */}
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteModal${chore.id}`}>
                                        DELETE
                                    </button>

                                    <div className="modal fade" id={`deleteModal${chore.id}`} tabIndex="-1" aria-labelledby={`deleteModalLabel${chore.id}`} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id={`deleteModalLabel${chore.id}`}>Deleting Chore</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    {`Chore to be deleted: ${chore.name}`}
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button className='btn btn-danger' onClick={() => deleteChore(chore.id)}>CONFIRM</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                {/* Update */}
                                <td>
                                    <EditChores chore={chore}/>
                                </td>
                                {/* Deadline */}
                                <td>{new Date(chore.deadline).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='text-center mt-4'>COMPLETE</div>
            <div className="container text-center mt-2 border-test">
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">CHORE</th>
                            <th scope="col">USER</th>
                            <th scope="col">DELETE</th>
                            <th scope="col">UPDATE</th>
                            <th scope="col">DEADLINE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedChores
                            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                            .map((completedChore, index) => (
                            <tr key={completedChore.id}>
                                <th scope='row'>{index + 1}</th>
                                {/* Chore */}
                                <td>
                                    <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${completedChore.id}`} aria-expanded="false" aria-controls="collapseExample">
                                        {completedChore.name}
                                    </button>
                                    <ToggleComplete chore={completedChore}/>
                                </td>
                                {/* User */}
                                <td>{'<USER>'}</td>
                                {/* Delete */}
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteModal${completedChore.id}`}>
                                        DELETE
                                    </button>

                                    <div className="modal fade" id={`deleteModal${completedChore.id}`} tabIndex="-1" aria-labelledby={`deleteModalLabel${completedChore.id}`} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id={`deleteModalLabel${completedChore.id}`}>Deleting Chore</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    {`Chore to be deleted: ${completedChore.name}`}
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button className='btn btn-danger' onClick={() => deleteChore(completedChore.id)}>CONFIRM</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                {/* Update */}
                                <td>
                                    <EditChores chore={completedChore}/>
                                </td>
                                {/* Deadline */}
                                <td>{new Date(completedChore.deadline).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Chores;