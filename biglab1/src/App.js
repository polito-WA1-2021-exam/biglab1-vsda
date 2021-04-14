import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Image, ButtonGroup, Button, OverlayTrigger, Tooltip, ButtonToolbar } from 'react-bootstrap';
import Task from './Task';

function App() {
  return (
    <Container fluid={true} className="p-0 m-0">
      <Row>
        <Col md={1} xs={1} className="p-0 m-0">
          <aside className="bg-primary align-items-center text-center mx-auto" id="filter-sidebar" style={{ minHeight: '100vh', minWidth: '100%' }}>
            <div>
              <Button id="home" className="mt-4 p-0" variant="link"><i className="bi bi-list-nested text-dark" aria-label="Home" style={{ fontSize: '1.5rem' }}></i></Button>
            </div>
            <div>
              <ButtonGroup vertical className="m-0 w-100 pt-5">
                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-all">All inbox</Tooltip>}>
                  <Button id="filter-all" className="p-3  btn-primary" variant="link"><i className="bi bi-inbox text-light d-flex justify-content-center" aria-label="All" style={{ fontSize: '1.5em'}}></i></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-important">Important</Tooltip>}>
                  <Button id="filter-important" className="p-3 btn-primary" variant="link"><i className="bi bi-bookmark-star text-light d-flex justify-content-center" aria-label="Important" style={{ fontSize: '1.5rem' }}></i></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-today">Today</Tooltip>}>
                  <Button id="filter-today" className="p-3 btn-primary" variant="link"><i className="bi bi-sunset text-light d-flex justify-content-center" aria-label="Today" style={{ fontSize: '1.5rem' }}></i></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-week">This week</Tooltip>}>
                  <Button id="filter-week" className="p-3 btn-primary" variant="link"><i className="bi bi-calendar-week text-light d-flex justify-content-center" aria-label="This week" style={{ fontSize: '1.5rem' }}></i></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-private">Private</Tooltip>}>
                  <Button id="filter-private" className="p-3 btn-primary" variant="link"><i className="bi bi-eye-slash text-light d-flex justify-content-center" aria-label="Private" style={{ fontSize: '1.5rem' }}></i></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-all">Search</Tooltip>}>
                  <Button id="filter-search" className="p-3 btn-primary" variant="link"><i className="bi bi-search text-light d-flex justify-content-center" aria-label="Search" style={{ fontSize: '1.5rem' }}></i></Button>
                </OverlayTrigger>
              </ButtonGroup>
            </div>
            <div><OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-options">Options</Tooltip>}>
              <Button id="options" className="p-3 btn-primary w-100" variant="link"><i className="bi bi-three-dots text-light d-flex justify-content-center" aria-label="Options" style={{ fontSize: '1.5rem' }}></i></Button>
            </OverlayTrigger>
            </div>
            <div style={{position: "absolute", bottom: "0px"}}>
              <OverlayTrigger placement="right" overlay={<Tooltip id="image-tooltip-profile">Profile</Tooltip>}>
                <Image className="w-80 mb-5" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ width: '50%', height: 'auto' }}></Image>
              </OverlayTrigger>
            </div>
          </aside>
        </Col>
        <Col md={3} id="collapse-col" className="collapse bg-info align-items-center text-center p-2 d-md-block">
        </Col>
        <Col md={8} xs="auto" className="mr-4" className="p-5 m-0">
          <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button className="bg-primary">Morning</Button>
              <Button className="bg-primary">Afternoon</Button>
              <Button className="bg-primary">Evening</Button>
              <Button className="bg-primary">Night</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <h1 className="mt-4">Title</h1>
          <ListGroup variant="flush">
            <Task id={0} label="blank task" />
            <Task id={1} label="task1" projectBadge='project' dateBadge='Today at 14:00' />
            <Task id={2} completed={true} />
            <Task id={3} label="pizza" completed={true} projectBadge='project' icon={true} dateBadge='Tomorrow at 11:00' />
            <Task id={4} label="elapsed task" date='1999-01-01' dateVariant='danger' />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;