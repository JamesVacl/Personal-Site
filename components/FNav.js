import Link from 'next/link'
import {Container, Footer, Button } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

export const FNav = () => {
  return (
    <>
      <Container fluid className='page-footer text-white text-center footnav'>
        <footer>
          <h5>Website Developed by James Vaclavek</h5>
          <Button href="mailto:jamesvaclavek@gmail.com" variant="outline-info" target='_blank'>jamesvaclavek@gmail.com</Button>
        </footer>
      </Container>
    </>
  )
}

export default FNav