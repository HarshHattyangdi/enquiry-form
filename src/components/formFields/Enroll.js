import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
export default function Enroll() {

    const history = useHistory();
    const handleClick = () => history.push('/contactyou')

    return (
        <>
            <center>
                <div className="row">
                    <div className="col-4 offset-4">
                        <button
                            type="submit"
                            className="btn btn-lg btn-secondary fs-4"
                            style={{
                                padding: '1% 12% 1% 12%',
                                marginTop: '15%'
                            }}
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faLock} size="1x"></FontAwesomeIcon> Enroll
                        </button>
                    </div>
                </div>
                <div className="row">
                    <p className="col-4 offset-4">
                        Questions?
                        <a href="#" style={{
                            textDecoration: 'none',
                        }}>
                            <u>Talk</u>
                            with us
                        </a>
                    </p>
                </div>

            </center>

        </>
    )
}