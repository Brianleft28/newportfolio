import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                In the realm of web development, I navigate the intricate
                landscape with proficiency in the MERN stack – a dynamic quartet
                comprising MongoDB, Express.js, React, and Node.js. This
                ensemble of technologies forms the backbone of my skill set,
                empowering me to craft robust and responsive applications. From
                shaping data structures in MongoDB to creating seamless user
                interfaces with React, my expertise spans the entire development
                cycle. With a keen eye for detail and a passion for innovation,
                I transform ideas into interactive and scalable web solutions.
                Explore the synergy of MongoDB's NoSQL capabilities,
                Express.js's streamlined web application development, React's
                declarative approach to UI, and Node.js's server-side prowess as
                we embark on the journey of crafting digital experiences.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'>
                <div className='item'>
                  <img src={meter1} alt='Mongo Meter' />
                  <h5>Mongo DB</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='Express Meter' />
                  <h5>Express</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Node Metter' />
                  <h5>Node</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='React Metter' />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt='' className='background-image-left' />
    </section>
  )
}
