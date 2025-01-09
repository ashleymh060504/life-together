
function InviteFriends() {

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inviteFriendsModal">
                Invite Family Buddies
            </button>

            <div className="modal fade" id="inviteFriendsModal" tabIndex="-1" aria-labelledby="inviteFriendsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="inviteFriendsModalLabel">{`Need more hands on deck?`}<br/>{`Invite a groupmate!`}</h1>
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
                                    <input type="email"
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
                                        placeholder="Enter your message..." required></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Invite!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InviteFriends;