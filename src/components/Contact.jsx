import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  /* Renderizado */
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Imagen de Contacto' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
