import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Space from './Space';
import Input from './Input';
import {  useNavigate } from 'react-router-dom';

type HeaderNavProps = {
  isDarkMode: boolean;
  onModeToggle: () => void;
};


const HeaderNav: React.FC<HeaderNavProps> = (props) => {
  const { isDarkMode, onModeToggle } = props;
  const navigate = useNavigate();

  return (
    <div className={`header-nav navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="title" href="#home">
          <Nav.Link onClick={()=> {
            navigate("/")
          }}>React-Shop</Nav.Link>
          </Navbar.Brand>
          <Space width="10px" height="0"></Space>
          <Nav className="me-auto">
          <Nav.Link className="detail1" onClick={()=> {
            navigate("/fashion")
          }}>패션</Nav.Link>
            <Space width="10px" height="0"></Space>

            <Nav.Link className='detail2' onClick={()=> {
            navigate("/accessory")
          }}>악세서리</Nav.Link>
            <Space width="10px" height="0" />
            <Nav.Link  className="detail3"onClick={()=> {
            navigate("/digital")
          }}>디지털</Nav.Link>
          </Nav>
        </Container>
        <Input isDarkMode={isDarkMode} onModeToggle={onModeToggle} />
      </Navbar>
    </div>
  );
};



export default HeaderNav;
