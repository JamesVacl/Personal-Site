import Link from 'next/link'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

const Navigation = () => {
	return (
		<>
			<Navbar expand="md" className='fixed-top'>
					{/*left side of navbar */}
				<Container fluid>
					<Navbar.Brand href='/' style={{ color: "white" }}>James Vaclavek</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav as="ul" className='me-auto'>
							<Nav.Item as="li">
								<Nav.Link className='text-white' href="/">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link className='text-white' href="/about">About</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link className='text-white' href="/hobbies">Hobbies</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link className='text-white' href="/stores">Freelance</Nav.Link>
							</Nav.Item>
						</Nav>

						{/*right side of navbar */}
						<Nav  defaultActiveKey="/" as="ul">
							<Nav.Item as="li">
								<SocialIcon url="https://twitter.com/JamesVaclavek" style={{ height: 25, width: 25, marginRight: 20 }} bgColor='white' target="_blank" rel="noopener noreferrer"/>
							</Nav.Item>

							<Nav.Item as="li">
								<SocialIcon url="https://www.linkedin.com/in/james-vaclavek" style={{ height: 25, width: 25, marginRight: 20 }} bgColor='white' target="_blank" rel="noopener noreferrer"/>
							</Nav.Item>

							<Nav.Item as="li">
								<SocialIcon url="https://medium.com/@jamesvaclavek" style={{ height: 25, width: 25, marginRight: 20 }} bgColor='white' target="_blank" rel="noopener noreferrer"/>
							</Nav.Item>

							<Nav.Item as="li">
								<SocialIcon url="mailto:jamesvaclavek@gmail.com" style={{ height: 25, width: 25, marginRight: 20 }} bgColor='white' target="_blank" rel="noopener noreferrer"/>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Navigation


