import "./contactUs.css";

function ContactUs() {

    return(
        <>
            <button type="button" className="btn btn-primary contactUs-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Us</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        // onChange={handleChange}
                                        id="name"
                                        placeholder="Enter your name..." required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        // onChange={handleChange}
                                        id="email"
                                        placeholder="Enter your email..." required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea 
                                        className="form-control"
                                        id="message"
                                        // onChange={handleChange}
                                        rows="3"
                                        placeholder="Enter your message..." required>
                                    </textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
