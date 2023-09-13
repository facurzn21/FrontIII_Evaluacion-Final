import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
import { UserContext } from '../contexts/UserContext';


const MyCard = ({ user }) => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">{user.name}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">{user.username}</CardSubtitle>
      <Button>Button</Button>
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