import { useState, useEffect } from 'react';
import EditChores from '../EditChores.jsx';
import './chores.css';

function Chores() {

    const [chores, setChores] = useState([]);
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
            setChores(data);
        } 
        catch (err) {
            console.error('Error fetching chores:', err.message);
            setError('An error occured while fetching chores.');
        }
    };

    useEffect(() => {
        getChores();
    }, []);

    // DELETE

    const deleteChore = async (id) => {
        try {
            const chore = await fetch(`http://localhost:3001/api/cleaning-chores/${id}`, {
                method: 'DELETE'
            });

            setChores(chores.filter(chore => chore.id !== id));
            window.location = '/together'
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
                        {chores.map((chore, index) => (
                            <tr key={chore.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>
                                    <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${chore.id}`} aria-expanded="false" aria-controls="collapseExample">
                                        {chore.name}
                                    </button>

                                    <div className="collapse" id={`collapseExample${chore.id}`}>
                                        <div className="card card-body">
                                            {chore.description}
                                        </div>
                                    </div>
                                </td>
                                <td>{'<USER>'}</td>
                                <td>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        DELETE
                                    </button>

                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Deleting Chore</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    {`Chore to be deleted: ${chore.name}`}
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button className='btn btn-danger' onClick={() => deleteChore(chore.id)}>CONFIRM</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <EditChores chore={chore}/>
                                </td>
                                <td>{new Date(chore.deadline).toLocaleDateString('en-US')}</td>
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
                            <th scope="col">CHORE</th>
                            <th scope="col">USER</th>
                            <th scope="col">DELETE</th>
                            <th scope="col">UPDATE</th>
                            <th scope="col">DEADLINE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Chores;