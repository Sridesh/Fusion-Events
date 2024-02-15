import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Styles/venues.css'
import Des from './des';
import ShowEventOrg from '../Components/showEventOrg';

const Eventorgs = () => {
    return (
        <div className="venues">
            <div className="greeting">
                <div className="content">
                    <h1 className='slogan'>Event Organizers</h1>
                    <div className="filt">
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="danger">Search</Button>
                        </Form>
                    </div>
                </div>
            </div>
            <Des/>
            <ShowEventOrg/>
        </div>

    );
}
 
export default Eventorgs;