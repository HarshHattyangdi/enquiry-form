import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function FormFields() {
    return (
        <>
            <div className="row pb-2">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                    ></input>
                </div>

                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required
                    ></input>
                </div>
            </div>

            <div className="row pb-2">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Address 1"
                        required
                    ></input>
                </div>
            </div>

            <div className="row pb-2">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Address 2"
                        required
                    ></input>
                </div>
            </div>

            <div className="row pb-2">
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        required
                    ></input>
                </div>

                <div className="col-2 p-0">
                    <div className="dropdown form-control dropdown-toggle" required>
                        State
                    </div>

                </div>

                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Zipcode"
                        required
                    ></input>
                </div>

            </div>

            <div className="row pb-5">
                <div className="col">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                    ></input>
                </div>
            </div>
        </>
    )
}