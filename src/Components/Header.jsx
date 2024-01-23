import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { MDBBadge } from 'mdb-react-ui-kit';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';




function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        
        <Navbar.Brand href="/">
            <img
              alt=""
              src="https://media3.giphy.com/media/dxIo2LVb06lUdIxqDg/source.gif"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>

          <MDBNavbarBrand href='/'>PRODUCT LISTS</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>SERVICES</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                CATEGORIES
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

           
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
      {/* carousel */}

      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"650px"}}
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1704295391~exp=1704295991~hmac=42d4c244a79c9861cebe31e24bf440b9c828f5288c071f1ee1db95d32289dcf3"
          alt="First slide"
        />
        <Carousel.Caption>

{/* badge */}

        <h2>
        Explore New
        <MDBBadge className='ms-2'>NEW</MDBBadge>
      </h2>

          <h4>ShopHub: Your Ultimate Online Retail Destination</h4>
          <p>Where Style Meets Convenience - Experience Effortless Shopping at its Best with Our E-commerce Haven.</p>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"650px"}}
          src="https://img.freepik.com/free-photo/image-happy-young-glamour-woman-shop-stores-with-discounts-showing-okay-sign-holding-shopping_1258-118066.jpg?w=1380&t=st=1704353113~exp=1704353713~hmac=2dee3ad210b5d50f9e189965c11afe9fac6e7816b52443328e9a79ac37df5ee0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>EpicCart: Unleash the Joy of Seamless Shopping</h4>
          <p>Dive into a World of Endless Choices and Irresistible Deals - Your One-stop Destination for Online Retail Bliss.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 " style={{height:"650px"}}
          src="https://wallpaperaccess.com/full/2484120.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>TrendTrove: Explore, Discover, Shop - Your Style, Your Way</h4>
          <p>
          Empowering Your Lifestyle with Every Click - Elevate Your Shopping Experience with Our Trendsetting E-commerce Platform.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

     
    </>
  )
}

export default Header
