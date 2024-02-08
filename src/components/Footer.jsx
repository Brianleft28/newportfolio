import { Container, Row, Col } from 'react-bootstrap'
export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h3>Brian Benegas, 2024 &#xA9;</h3>
            <p>Buenos Aires, Ituzaingó.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
