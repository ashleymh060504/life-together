
function InviteFriends() {

    return(
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inviteFriendsModal">
                Invite Family Buddies
            </button>

            <div class="modal fade" id="inviteFriendsModal" tabindex="-1" aria-labelledby="inviteFriendsModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="inviteFriendsModalLabel">{`Need more hands on deck?`}<br/>{`Invite a groupmate!`}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Invite!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InviteFriends;