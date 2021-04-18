import { Collapse, Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';

const filters = [
    {label: "All", icon: 'inbox'},
    {label: "Important", icon: 'bookmark-star'},
    {label: "Today's", icon: 'sunset'},
    {label: "Next week's", icon: 'calendar-week'},
    {label: "private", icon: 'eye-slash'},
]

function NavBarMobile(props) {
    return (
        <Collapse id="mobile-navbar" in={!props.open}>
            <Row className="p-0 d-block d-md-none d-lg-none d-xl-none bg-primary align-items-center text-center mx-auto" style={{ minWidth: '100%' }}>
                <div className="d-block d-md-none d-lg-none d-xl-none">
                    <Button onClick={() => props.setOpen(old => !old)} id="home" className="mt-4 p-0" variant="link"><i className="bi bi-list-nested text-dark" aria-label="Home" style={{ fontSize: '1.5rem' }}></i></Button>
                </div>
            </Row>
        </Collapse>);
}

export default NavBarMobile;