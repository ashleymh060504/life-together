// import Auth from '../utils/auth.js';

// const retrieveUsers = async () => {
//     try {
//         const response = await fetch('http://localhost:3001/api/users', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Auth.getToken()}`
//             }
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('Invalid user API response');
//         }

//         return data;
//     } 
//     catch (err) {
//         console.log('Error from data retrieval:', err);
//         return [];
//     }
// };

// export { retrieveUsers };