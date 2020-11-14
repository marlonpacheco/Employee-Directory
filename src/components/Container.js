import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../styles/Container.css";

const EmployeeContainer = (props) => {
    return (
        props.employees.map(employee => {
            console.log(employee)
            return (
                // <h1> {employee.name.first} </h1>

                <Container className="box">
                    <Row>
                        <Col xs={4}>
                        <img
                        src={employee.picture.large}
                        alt={employee.name.first}
                    />
                        </Col>
                        <Col xs={8}>
                    <Row className="employee">{employee.name.last}, {employee.name.first} </Row>
                    <Row>Age: {employee.dob.age} </Row>
                    <Row>City: {employee.location.city} </Row>
                    <Row>State: {employee.location.state} </Row>
                    <Row>phone: {employee.phone} </Row>
                    </Col>
                    </Row>


                </Container>
            )
        })
    )


}

export default EmployeeContainer;