import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';

const MyCard = ({ title, subtitle, text }) => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
      <CardText>{text}</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
)

const Cards = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
      </Row>
      <Row>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
      </Row>
      <Row>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
        <Col sm="3">
          <MyCard title="Card title" subtitle="Card subtitle" text="Some text." />
        </Col>
      </Row>

    </Container>
  );
};

export default Cards;