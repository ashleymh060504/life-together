import React, { useState } from 'react';

const InviteFriendsModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleInvite = () => {
        alert(`Invite sent to: ${email}`);
        setEmail(''); // Clear the input after sending the invite
        closeModal();
    };

    return (
        <div>
            <button onClick={openModal}>Invite Friends</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Invite Your Friends!</h2>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            placeholder="Friend's email" 
                        />
                        <button onClick={handleInvite}>Send Invite</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InviteFriendsModal;