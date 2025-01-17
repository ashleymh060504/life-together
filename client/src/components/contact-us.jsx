import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsModal = ({ show, handleClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        setEmail(target.value);
        setName(target.value);
        setMessage(target.value);
    }

    const handleSubmission = () => {
        alert(`Message has been sent to ${name}`);
        setName('')
        setEmail('')
        setMessage('')
    }
   
    return (
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        id="name"
                        placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        className="form-control"
                        onChange={handleChange}
                        id="email"
                        placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label 
                        htmlFor="message">Message</label>
                        <textarea 
                        className="form-control"
                        id="message"
                        onChange={handleChange}
                        rows="3"
                        placeholder="Your Message" required></textarea>
                    </div>
                </form>
    );
};

export default ContactUsModal;