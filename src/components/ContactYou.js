import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function ContactYou() {
    return (
        <div className="container-fluid">
            <h1 className="display-1">
                We'll be in touch!
            </h1>
            <h4>
                An Agent will contact you at the address provided to collect furtheer information.
            </h4>
            <div className="row">
                <div className="col">
                    <div className="row p-4 m-5">
                        <a>Clinical Trial Information</a>
                    </div>
                    <div className="row p-4 m-5">
                        <a>Doctors info phamplet</a>
                    </div>
                    <div className="row p-4 m-5">
                        <a>Legal Disclosure Information</a>
                    </div>

                </div>
                <div className="col">
                    <svg
                        class="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                        width="400px"
                        height="400px"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >

                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
                    </svg>
                </div>
            </div>
        </div>
    )
}