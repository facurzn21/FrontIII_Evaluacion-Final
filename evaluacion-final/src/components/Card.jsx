import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';

const Example = (props) => {

  return (
    <Container>
      <Row>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some text.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;