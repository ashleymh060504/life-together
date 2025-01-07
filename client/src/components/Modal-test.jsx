// Testing

function ModalTest() {

    return(
        <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Invite Family Buddies
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text"
                        className="form-control"
                        // onChange={handleChange}
                        id="name"
                        placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        className="form-control"
                        // onChange={handleChange}
                        id="email"
                        placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label 
                        htmlFor="message">Message</label>
                        <textarea 
                        className="form-control"
                        id="message"
                        // onChange={handleChange}
                        rows="3"
                        placeholder="Your Message" required></textarea>
                    </div>
                </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Invite!</button>
        </div>
        </div>
    </div>
    </div>
</div>
    );
};

export default ModalTest;