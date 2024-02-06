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

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className='banner'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline' id='home'>
              Welcome to my Portfolio
            </span>
            <h1>
              {`Hi! I'm Brian`}{' '}
              <span
                className='txt-rotate'
                dataPeriod='1000'
                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                <span className='wrap'>{text}</span>
              </span>
            </h1>
            <p>
              ¡Hola! Soy Brian, un apasionado desarrollador web con una sólida
              experiencia en la creación de experiencias digitales cautivadoras.
              Mi enfoque se centra en fusionar diseño creativo con funcionalidad
              robusta para construir sitios web que no solo son visualmente
              atractivos, sino también altamente efectivos. Con habilidades en
              las últimas tecnologías web, desde HTML5, CSS3 hasta JavaScript y
              frameworks modernos como React y Vue.js, estoy preparado para
              llevar tus ideas al mundo digital.
            </p>
            <button onClick={() => console.log('connect')}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
