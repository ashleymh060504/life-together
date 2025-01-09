import { useState, useEffect } from 'react';
import './chores.css';

function Chores() {

    const [chores, setChores] = useState([]);

    const getChores = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/cleaning-chores');
            const data = await response.json();
            
            setChores(data);
        } 
        catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getChores();
    }, []);

    return(
        <>
            <div className='text-center mt-5'>TO-DO</div>
            <div class="container text-center mt-2 border-test">
                <table class="table table-hover mt-3">
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
                        {chores.map(chore => (
                            <tr>
                                <th scope='row'>{chore.id}</th>
                                <td>{chore.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='text-center mt-4'>COMPLETE</div>
            <div class="container text-center mt-2 border-test">
                <table class="table table-hover mt-3">
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