import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const PageAbout = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <h2>What is this</h2>
          <p>This is a calendar web app where you can add, edit and remove events.</p>
          <h2>How to use</h2>
          <p>Click or drag on the empty space of the date boxes of the Calendar to add new event. To edit/remove an event click the event.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default PageAbout