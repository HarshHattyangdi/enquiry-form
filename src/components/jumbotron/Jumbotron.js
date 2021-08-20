// import { render } from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import family from '../jumbotron/images/family_crop.jpg';

export default function Jumbotron(params) {
    return (
        <div className="container-fluid" style={{
            padding: '0 0 0 0'
        }}>

            <img src={family} className="img-fluid" alt="Family"></img>
            <p className="fs-1">Get Back to Living</p>
            <p className="fs-4">Cyzplamovir should be available to everyone who needs it. Can't afford it? Enroll here to see if we can help</p>

        </div >
    )
}
