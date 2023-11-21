import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import searchIcon from '../component/search.gif'

function TextLinkExample() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Instagram</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div>
                        <input type='text' placeholder='Search' /><button className='searchbar'><Image src={searchIcon} /></button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TextLinkExample;