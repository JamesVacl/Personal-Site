import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import FNav from '../components/FNav'
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function Stores() {
  return (
    <>
      <Meta title="James' Services" />
      <Navigation />
      <Container>
        <Row>
          <Col className='col-lg-4'>
            <img src='/digitalme.png' className='background-image' />
          </Col>
          <Col className='col-lg-8 storeTitle'>
            <h1>Having Trouble Finding a Job? I can Help!</h1>
          </Col>
        </Row>
      </Container>

      <Container className='conGum border text-center'>
        <Row>
          <h2 className='ebookCard'>Gumroad Store</h2>
          <hr />
        </Row>
        <Row className='gumroad'>
          <Col className='col-lg-3'>
            <Card className='cardGum zoom'>
              <img className='card-img-top embed-responsive-item cardGum' src='/ebook_coverpage.jpg' />
              <div className='card-body'>
                <h5 className='card-title'></h5>
                <p className='card-text'>In this ebook, I give advice on how to write resumes/cover letters, how to prepare for interviews, and how to get an edge over other applicants.</p>
                <a href='https://jamesvacl.gumroad.com/' className='stretched-link' target="_blank" rel="noopener noreferrer"></a>
              </div>
            </Card>
          </Col>

          <Col className='col-lg-3'>
            <Card className='cardGum zoom'>
              <img className='card-img-top embed-responsive-item cardGum' src='/Resume_IMG.jpg' />
              <div className='card-body'>
                <h5 clasName='card-title'>Resume Template</h5>
                <p className='card-text'>I have created a simple but effective resume template to help you succeed in your job hunt. </p>
                <a href='https://jamesvacl.gumroad.com/' className='stretched-link' target="_blank" rel="noopener noreferrer"></a>
              </div>
            </Card>
         </Col>

          <Col className='col-lg-3'>
            <Card className='cardGum zoom'>
              <img className='card-img-top embed-responsive-item cardGum' src='/CoverLetter_IMG.jpg' />
              <div className='card-body'>
                <h5 clasName='card-title'>Cover Letter Template</h5>
                <p className='card-text'>Use my cover letter template to increase your chance at getting noticed by employers </p>
                <a href='https://jamesvacl.gumroad.com/' className='stretched-link' target="_blank" rel="noopener noreferrer"></a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='freelance text-center'>
        <hr />
        <h2>Freelance Services </h2>
        <hr />
        <Table className='freeTable table-bordered text-center'>
          <thead>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
          </thead>
          <tbody>
            <tr>
              <td>Resume and Cover Letter Editing</td>
              <td> Resume editing for punctuation, grammar, and suggestions on layout/content </td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Academic Editing</td>
              <td>I specialize in editing research papers for social science, humanities, business, and economics courses.</td>
              <td>$10 per page</td>
            </tr>
            <tr>
              <td>Resume-to-Job matching using AI</td>
              <td>I write a code for your specific resume and match it to a job description to provide a % match </td>
              <td>$20.00 per job description</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}