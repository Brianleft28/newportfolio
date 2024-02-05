import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  return (
    <section className='banner'>
      <Container>
        <Row className='alig-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Brian Benegas`}
              <span className='wrap'>web developer</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eos
              perspiciatis et ipsam, labore, tenetur error magni quasi omnis
              distinctio amet nihil nulla quibusdam tempora. Repellendus eveniet
              soluta reprehenderit cum?
            </p>
            <button onClick={() => console.log('connect')}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
