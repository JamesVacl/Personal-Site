import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'


export default function Home() {
  return (
    <>
    <Meta />
      <Container fluid className='background text-center'>
        <Row>
          <Col className='col-lg-6 fade-in-fwd'>
            <h1>Hi I'm James!</h1>
            <h2>Economic Developer</h2>
            <h2>Programmer</h2>
            <h2>Freelancer</h2>
            <h2>Dog Lover!</h2>
            <div className='button-block'>
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

            <div className='socials fade-in-fwd'>
              <SocialIcon url="https://twitter.com/JamesVaclavek" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer"/>
              <SocialIcon url="https://www.linkedin.com/in/james-vaclavek" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer"/>
              <SocialIcon url="https://medium.com/@jamesvaclavek" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer"/>
              <SocialIcon url="mailto:jamesvaclavek@gmail.com" style={{ height: 30, width: 30 }} bgColor='darkturquoise' target="_blank" rel="noopener noreferrer"/>
            </div>

          </Col>
          <Col className='homepage col-lg-6'>
            <img className='img-fluid img-responsive shadow fade-in-fwd' src='/jv-intro.jpg' alt="James with a dog" ></img>
          </Col>
        </Row>
      </Container>
    </>
 )
}
