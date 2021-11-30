import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'


export default function Home() {
  return (
    <>
    <Meta />
      <Container fluid className='background text-center'>
        <Row>
          <Col className='leftSide col-sm-6 col-12 fade-in-fwd'>
            <h1>Hi I'm James!</h1>
            <h2>Economic Developer</h2>
            <h2>Programmer</h2>
            <h2>Freelancer</h2>
            <h2>Dog Lover!</h2>
          </Col>
          <Col className='homepage col-sm-6 col-12'>
            <Image className='img-fluid float-right shadow fade-in-fwd' src='/jv-intro.jpg' alt="James with a dog" />
          </Col>
        </Row>
        <Row className='no-gutters'>
          <Col className='col-sm-6 col text-center'>
            <div className='button-block fade-in-fwd'>
              <ul>
                <li>
                  <Button href='/about' variant="outline-info">About Me</Button>
                </li>
                <li>
                  <Button href='/hobbies' variant="outline-info">Hobbies</Button>
                </li>
                <li>
                  <Button href='/stores' variant="outline-info">Freelance</Button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
          <Col className='col-sm-6 col text-center fade-in-fwd'>
            <div className='socials'>
              <SocialIcon url="https://twitter.com/JamesVaclavek" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer" />
              <SocialIcon url="https://www.linkedin.com/in/james-vaclavek" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer" />
              <SocialIcon url="https://medium.com/@jamesvaclavek" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer" />
              <SocialIcon url="mailto:jamesvaclavek@gmail.com" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer" />
            </div>
          </Col>
      </Container>
    </>
 )
}
