import React, { useState } from 'react';
import { use } from 'react';

const InviteFriendsModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        setEmail(target.value);
        setName(target.value);
        setMessage(target.value);
    };

    const handleInvite = () => {
        alert(`Invite sent to: ${name}`);
        setEmail('');
        setName('');
        setMessage('');
    };

    return (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}></span>
                        <h2>Need more hands on deck? Invite a groupmate!</h2>
                        <input
                        type='name'
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Friend's Name"
                        />
                        <input 
                            type="email" 
                            value={email} 
                            onChange={handleInputChange} 
                            placeholder="Friend's Email" 
                        />
                        <input
                        type="text"
                        value={message}
                        onChange={handleInputChange}
                        placeholder='Message'
                        />
                        <button onClick={handleInvite}>Send Invite</button>
                    </div>
                </div>
            )
};

export default InviteFriendsModal;