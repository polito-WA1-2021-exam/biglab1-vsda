import { useState } from 'react';
import { ListGroup, Badge, Form, Row, Col } from 'react-bootstrap';
import DayJS from 'react-dayjs';
import getTasks from './Filters'

/**
 function formatDeadline(date){
    if(!date) return '--o--';
    else if(isToday(date)) {
        return date.format('[Today at] HH:mm');
    } else if(isTomorrow(date)) {
        return date.format('[Tomorrow at] HH:mm');
    } else if(isYesterday(date)) {
        return date.format('[Yesterday at] HH:mm');
    } else {
        return date.format('dddd DD MMMM YYYY [at] HH:mm');
    }
} */

function TasksList (props) {
    return (
        <ListGroup variant='flush'>
            {
                getTasks(props.tasks, props.filter).map( (task) => 
                    <Task
                        key={`task-${task.id}`}
                        task={task}
                        handleTaskList={props.handleTaskList}
                    />)
            }
        </ListGroup>
    );
}

function Task(props) {
    const [taskCompleted, setCompleted] = useState(props.task.completed === 'true' || props.task.completed === true);

    return (
        <Row >
            <ListGroup.Item id={`task-${props.task.id}`} className='list-group-item d-flex w-100' action>
                <Col onClick={() => props.handleTaskList.setEditTask(props.task)}>
                    <Row>
                        <Col xs={4}> <TaskDescription id={props.task.id} completed={taskCompleted === 'true' || props.task.completed === true} description={props.task.description} setCompleted={ event => setCompleted(event.target.checked) } important={props.task.important === 'true' || props.task.important === true}/> </Col>
                        <Col xs={1}> <TaskPrivateIcon id={props.task.id} private={props.task.private === 'true' || props.task.private === true}/> </Col>
                        <Col>
                            <Row>
                                <Col className='d-inline-flex'> <TaskProject id={props.task.id} project={props.task.project}/> </Col>
                                <Col className='d-inline-flex'> <TaskDeadline id={props.task.id} deadline={props.task.deadline}/> </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1} className='d-inline-flex flex-row-reverse'>
                    <Row>
                        <TaskControls task={props.task} handleTaskList={props.handleTaskList}/>
                    </Row>
                </Col>
            </ListGroup.Item>
        </Row>
    );
}

function TaskDescription (props) {
    return (
        <Form>
            <Form.Check id={`task-${props.id}-checkbox`} custom>
                <Form.Check.Input type='checkbox' defaultChecked={props.completed} value={props.completed} onChange={props.setCompleted}/>
                <Form.Check.Label className={props.important ? 'text-danger' : ''}>{props.description}</Form.Check.Label>
            </Form.Check>
        </Form>
    );
}

function TaskPrivateIcon (props) {
    if(props.private) return (<i id={`task-${props.id}-private`} className='bi bi-eye-slash-fill ml-3' aria-label='Private' variant='secondary' style={{ fontSize: '1em' }}></i>);
    return (<></>);
}

function TaskProject (props) {
    if(props.project) return (
        <Badge id={`task-${props.id}-project`} pill variant='info'>
            {props.project}
        </Badge>);
    return (<></>);
}

function TaskDeadline (props) {
    if (props.deadline) return (
        <Badge id={`task-${props.id}-date`} variant='dark'>
            <DayJS format='MMMM D, YYYY h:mm A'>{props.deadline}</DayJS>
        </Badge>);
    return (<></>);
}

function TaskControls(props) {
    return (
        <Row>
            <div className='pr-2' onClick={() => props.handleTaskList.setEditTask(props.task)}>
                <i id={`task-${props.task.id}-edit`} className='bi bi-pencil-square text-primary' aria-label='Edit'></i>
            </div>
            <div className='pr-2' onClick={() => props.handleTaskList.deleteTask(props.task.id)}>
                <i id={`task-${props.task.id}-delete`} className='bi bi-trash text-danger' aria-label='Delete'></i>
            </div>
        </Row>
    );
}

export default TasksList;