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

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Sending...')

    try {
      let response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formDetails)
      })

      let result = await response.json()

      setButtonText('Send')
      setFormDetails(formInitialDetails)

      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' })
      } else {
        setStatus({
          success: true,
          message: 'Something went wrong, please try again later.'
        })
      }
    } catch (error) {
      // Handle any errors that occur during the fetch and parsing of JSON
      console.log('Valor de status antes de actualizar:', status)
      setStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      })
      setButtonText('Send')
      buttonText.className = 'send'
      console.log('Valor de status despues de actualizar:', status)
      console.error('Error during fetch:', error)
    }
  }

  /* Renderizado */
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={12} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    placeholder='Email Address'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={12} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone No.'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows='6'
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={(e) =>
                      onFormUpdate('message', e.target.value)
                    }></textarea>
                </Col>
                {status.message && (
                  <Col sm={12} className='text-center'>
                    <p
                      className={
                        status.success === false ? 'danger' : 'sucess'
                      }>
                      {status.message}
                    </p>
                  </Col>
                )}
                <button
                  type='submit'
                  className={buttonText === 'Send' ? 'send' : 'success'}>
                  <span>{buttonText}</span>
                </button>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
