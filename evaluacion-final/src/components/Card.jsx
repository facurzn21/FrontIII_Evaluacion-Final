import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
import { UserContext } from '../contexts/UserContext';
import doctorImage from '../../public/images/doctor.jpg';

const MyCard = ({ user }) => (
  <Card style={{ margin: "15px 0", minHeight: "250px", maxHeight: "250px" }}>
    <div style={{ height: '100px'}}>
      <img src={doctorImage} alt="Doctor" style={{ width: '60%', height: 'auto' }} />
    </div>
    <CardBody>
      <CardTitle tag="h6">{user.name}</CardTitle>
      <CardSubtitle tag="h7" className="mb-2 text-muted">{user.username}</CardSubtitle>
    </CardBody>
  </Card>
);

const Cards = (props) => {
  const users = useContext(UserContext);
  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col sm="3" key={user.id}>
            <MyCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Cards;