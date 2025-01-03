import React, { useState } from 'react';

function Test() { 
    const [chores, setChores] = useState([]);
    const [name, setName] = useState('');

    const getChores = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/cleaning-chores/');
            const data = await response.json();
            setChores(data);
            console.log(data);
        } 
        catch (err) {
            console.error(err.message);
        }
  }

// Work in Progress

  const postChores = async (e) => {
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
        const data = response.json();
        console.log(data);
    } 
    catch (err) {
        console.error(err.message);
    }
  }

  //

    return(
        <div>
            <h1>List of Chores</h1>
            <ol>
                {chores.map((chore, index) => (
                    <li key={index}>
                        <p>{chore.name}</p>
                    </li>
                    ))}
            </ol>
            <button onClick={getChores}>Click me!</button>

            {/* <h1>Add a New Chore</h1>
            <form onSubmit={postChores}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
                <button type="submit">Add Chore</button>
            </form> */}
        </div>
    );
};

export default Test;