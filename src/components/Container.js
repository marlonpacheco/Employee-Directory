import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EmployeeContainer = (props) => {
    return (
        props.employees.map(employee => {
            console.log(employee)
            return (
                // <h1> {employee.name.first} </h1>

                <Container>
                    <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src={employee.picture.medium}
                        alt={employee.name.first}
                    />
                    <Media.Body>
                    <h5>{employee.name.last}, {employee.name.first} </h5>
                    <ul>City: {employee.location.city} </ul>
                    <ul>State: {employee.location.state} </ul>
                    <ul>phone: {employee.phone} </ul>
                    </Media.Body>
                </Container>
            )
        })
    )


}

export default EmployeeContainer;