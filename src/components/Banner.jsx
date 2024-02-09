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
          <Col xs={12} md={6} xl={7} className='text-center'>
            <span className='tagline' id='home'>
              Welcome to my Portfolio
            </span>
            <h1>{`Hi! I'm Brian`} </h1>
            <h2>
              <span className='txt-rotate'>
                <span className='wrap'>{text}</span>
              </span>
            </h2>
            <p>
              Currently, I'm diving deep into the fascinating realm of the MERN
              (MongoDB, Express.js, React, Node.js) stack, expanding my
              knowledge and sharpening my development skills. <br /> <br />
              And if you're thinking, "Hey, this person seems like someone I'd
              love to work with!" – well, you're absolutely right! I'm not just
              coding; I'm crafting digital wonders. So, whether you have an
              exciting project, a challenging problem, or just want to discuss
              the latest tech trends over coffee, feel free to reach out! Let's
              turn ideas into reality and have some coding adventures together.
            </p>
            <a
              target='_blank'
              href='https://wa.link/6s2go2'
              className='btn-email'>
              <button tar className='mx-auto'>
                Let's Talk! <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
