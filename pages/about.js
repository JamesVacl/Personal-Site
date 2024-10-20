import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Script from 'next/script';

export default function About() {
  return (
      <>
        <Meta title='About James' />
        <Navigation />
        <Script src="https://kit.fontawesome.com/d721022113.js" />
        <Container fluid className='bio'>
          <Row>
            <Col className='col-sm-3 text-center headshot'>
              <img src='/James-Vaclavek-Headshot.jpg' alt="James Headshot" className='img-thumbnail img-responsive p-1 mb-3 shadow'></img>
              <h4 style={{color:"white"}}>James Vaclavek</h4>
              <h5 className="text-muted">Economic Developer</h5>
            </Col>

            <Col className='col-sm-6 text-center'>
              <h2>Bio</h2>
              <hr width="100%" align="left" style={{borderColor:'white'}} />

              <p>My name is James Vaclavek, I am an Economic Developer by trade, where I work closely with businesses to create jobs and grow communities. I also lead projects that aim to improve the quality of life for residents! </p>
              <p>I have a Masters in Economic Development and Innovation from the University of Waterloo, where I learned about workforce development, rural and urban development strategies, and community marketing techniques. </p>
              <p>I also am interested in Tech. I made this website as a COVID project and I enjoy finding ways to automate tasks with VBA and Python. Some of my business and technology skills are listed below! </p>

              <hr width="100%" align="left" style={{ borderColor: 'white' }} />
            </Col>
          </Row>
        </Container>
      <Container className='skills border shadow'>
        <Row>
          <Col className='titleSkill text-center'>
            <br />
            <h2>Skills</h2>
            <hr />
          </Col>
        </Row>
        <Row className='softskills row-space'>
          <Col className='col text-center'>
            <i className="fa fa-line-chart fa-3x"></i>
            <h4>Data</h4>
            <p>Tableau, SQL, Jupyter</p>
          </Col>
          <Col className='col text-center'>
            <i className="fa fa-keyboard-o fa-3x"></i>
            <h4>Writing</h4>
            <p>Academic, Grants, Resume</p>
          </Col>
          <Col className='col text-center'>
            <i className="fab fa-microsoft fa-3x"></i>
            <h4>Business</h4>
            <p>Presentations, Office 365 Suite, Salesforce</p>
          </Col>
        </Row>
        <Row className='hardskills row-space'>
          <Col className='col text-center'>
            <i className="fab fa-python fa-3x"></i>
            <h4>Python</h4>
            <p>Pandas, Django, BS4</p>
          </Col>
          <Col className='col text-center'>
            <i className="fas fa-code fa-3x"></i>
            <h4>Web Development</h4>
            <p>HTML, CSS, Bootstrap</p>
          </Col>
          <Col className='col text-center'>
            <i className="fab fa-js-square fa-3x"></i>
            <h4>Javascript</h4>
            <p>Reactjs, Nextjs, JSX</p>
          </Col>
        </Row>
      </Container>
      </>
  )
}