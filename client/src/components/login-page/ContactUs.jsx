import "./contactUs.css";

function ContactUs() {
  return (
    <>
      <div class="position-relative">
        <button
          type="button"
          class="btn contact-btn contactUs-btn position-absolute"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Contact Us
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Contact Us
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
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
                      placeholder="Enter your name..."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      // onChange={handleChange}
                      id="email"
                      placeholder="Enter your email..."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      // onChange={handleChange}
                      rows="3"
                      placeholder="Enter your message..."
                      required
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;