import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Script from 'next/script';

export default function Hobbies() {
  return (
      <>
      <Meta title="James' Hobbies" />
      <Navigation />
      <Script src="https://kit.fontawesome.com/d721022113.js" />
      <Container fluid className='hobbies'>
        <Col className='col-12 text-center'>
          <h1>Hobbie and Projects</h1>
          <hr></hr>
        </Col>
        <Container className='hobby1'>
          <Row>
            <Col className='coding col-sm-6 col-10 text-right'>
              <h2>Learning to Code!</h2>
              <hr align="left" />
              <p>During the COVID-19 pandemic, I found myself with more spare time due to the various lockdowns and restrictions. I have always been interested in computers and tech, so I dedicated this time to learning basic python skills. Since then, I have also learned Django, Reactjs and Nextjs, HTML, CSS, and Javascript.</p>
              <p>This has been a ton of fun and i've even started using the skills at work. Check out my Github.</p>
              <Button className=" fa fa-github" href='https://github.com/JamesVacl' target="_blank" rel="noopener noreferrer" variant="outline-info"> GitHub </Button>
            </Col>
            <Col className='codepic col-sm-4 text-center'>
              <img className='rounded-circle shadow p-1 mb-1 bg-white zoom' src='/coding.png' alt="cartoon coder picture" />
            </Col>
          </Row>
        </Container>

        <Container className='hobby2'>
          <Row>
            <Col className='winepic col-sm-6 text-center'>
              <img className='rounded-circle shadow p-1 mb-1 bg-white zoom' src='/wine.jpg' alt="Wine Hobby Picture" />
            </Col>
            <Col className='sommelier col text-left'>
              <h2 align="left">Wine Reviews</h2>
              <hr align="left" />
              <p>I enjoy wine and I post some reviews of my favourites as a hobby. I named the page Sommelierness (say it out loud for a laugh) because I want my reviews to be easy to read even for the most casual drinkers.</p>
              <p>Wine has been an interest of mine for several years now, and the tradition runs deep in my family. My grandfather kept records of all the wines he drank with notes on how it tasted, how it matched the price, where it was from, and what he paired it with. When he passed, my father took on this practice. This inspired me to take a more digital form of journaling that I could share with my network. I hope you enjoy!</p>
              <Button className="fa fa-instagram" href='https://www.instagram.com/sommeliernessreviews/' target="_blank" rel="noopener noreferrer" variant="outline-info"> Sommelierness Reviews </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      </>
  )
}