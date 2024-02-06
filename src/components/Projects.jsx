import { Col, Row, Container } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 

export const Projects = () => {
  const projects = [
    {
      title: 'Businnes Startup',
      description: 'Design & Development',
      imgUrl: projImg1
    },
    {
      title: 'Businnes Startup',
      description: 'Design & Development',
      imgUrl: projImg2
    },
    {
      title: 'Businnes Startup',
      description: 'Design & Development',
      imgUrl: projImg3
    },
    {
      title: 'Businnes Startup',
      description: 'Design & Development',
      imgUrl: projImg1
    },
    {
      title: 'Businnes Startup',
      description: 'Design & Development',
      imgUrl: projImg2
    },
    {
      title: 'Businnes Startup',
      description: 'Design & Development',
      imgUrl: projImg3
    }
  ]

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              officiis consequatur architecto quidem dolorum voluptates quo,
              unde perspiciatis quod, vero repudiandae voluptate quibusdam
              tempore? Est corporis dolore modi autem error. Aperiam fuga
              ratione officiis sapiente eveniet facilis molestiae reiciendis
              iure odio reprehenderit, ipsam ipsum modi doloremque a iusto!
              Culpa ad velit fuga non atque! Vitae ipsa illo quae nulla vero?
            </p>

            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant='pills' defaultActiveKey='/home'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} />
    </section>
  )
}
